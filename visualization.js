// Set up dimensions
const width = 1000;
const height = 600;

// Create SVG
const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "auto")
    .style("background", "#e8f4f8");

// Create tooltip
const tooltip = d3.select("#tooltip");

// Load the high-resolution shoreline data and render visualization
d3.json("great-lakes-shores.geojson").then(function(greatLakesGeoJSON) {

    // Set up projection - use Mercator and fit to the Great Lakes bounds
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    // Fit the projection to the GeoJSON bounds with padding
    projection.fitExtent([[20, 20], [width - 20, height - 20]], greatLakesGeoJSON);

    // Draw the Great Lakes with high-resolution shorelines
    svg.selectAll(".lake")
        .data(greatLakesGeoJSON.features)
        .enter()
        .append("path")
        .attr("class", "lake")
        .attr("d", path)
        .attr("fill", "#4a90e2")
        .attr("stroke", "#2a5298")
        .attr("stroke-width", 1.5)
        .on("mouseover", function(event, d) {
            d3.select(this).attr("fill", "#5ba3f5");
            const lakeName = d.properties.name.replace(" SHORELINE", "");
            tooltip
                .style("opacity", 1)
                .html(`<strong>${lakeName}</strong><br/>High-resolution NOAA shoreline data`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            d3.select(this).attr("fill", "#4a90e2");
            tooltip.style("opacity", 0);
        });

    // Create color scale for years
    const years = voyages.map(v => v.year);
    const minYear = d3.min(years);
    const maxYear = d3.max(years);
    const colorScale = d3.scaleSequential()
        .domain([minYear, maxYear])
        .interpolator(d3.interpolateViridis);

    // Create a map of port locations for easy lookup
    const portMap = new Map();
    ports.forEach(port => {
        portMap.set(port.name, [port.lon, port.lat]);
    });

    // Draw voyage routes
    voyages.forEach(voyage => {
        const fromCoords = portMap.get(voyage.from);
        const toCoords = portMap.get(voyage.to);

        if (fromCoords && toCoords) {
            const fromProj = projection(fromCoords);
            const toProj = projection(toCoords);

            svg.append("line")
                .attr("class", "voyage-path")
                .attr("x1", fromProj[0])
                .attr("y1", fromProj[1])
                .attr("x2", toProj[0])
                .attr("y2", toProj[1])
                .attr("stroke", colorScale(voyage.year))
                .on("mouseover", function(event) {
                    d3.select(this)
                        .attr("stroke-width", 4)
                        .style("opacity", 1);
                    tooltip
                        .style("opacity", 1)
                        .html(`
                            <strong>${voyage.vessel}</strong> (${voyage.year})<br/>
                            Route: ${voyage.from} → ${voyage.to}<br/>
                            Type: ${voyage.type}<br/>
                            Cargo: ${voyage.cargo}<br/>
                            Captain: ${voyage.captain}<br/>
                            ${voyage.distance ? `Distance: ${voyage.distance} miles` : ''}<br/>
                            ${voyage.duration ? `Duration: ${voyage.duration}` : ''}
                        `)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 10) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this)
                        .attr("stroke-width", 2);
                    tooltip.style("opacity", 0);
                });
        }
    });

    // Draw ports
    svg.selectAll(".port")
        .data(ports)
        .enter()
        .append("circle")
        .attr("class", "port")
        .attr("cx", d => projection([d.lon, d.lat])[0])
        .attr("cy", d => projection([d.lon, d.lat])[1])
        .attr("r", 4)
        .on("mouseover", function(event, d) {
            d3.select(this).attr("r", 6);
            tooltip
                .style("opacity", 1)
                .html(`<strong>${d.name}</strong><br/>State: ${d.state}<br/>Lake: ${d.lake}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            d3.select(this).attr("r", 4);
            tooltip.style("opacity", 0);
        });

    // Draw port labels for major ports
    const majorPorts = ports.filter(p =>
        ['Chicago', 'Detroit', 'Buffalo', 'Milwaukee', 'Cleveland', 'Toronto', 'Duluth'].includes(p.name)
    );

    svg.selectAll(".port-label")
        .data(majorPorts)
        .enter()
        .append("text")
        .attr("class", "port-label")
        .attr("x", d => projection([d.lon, d.lat])[0])
        .attr("y", d => projection([d.lon, d.lat])[1] - 8)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    // Draw shipwrecks
    svg.selectAll(".wreck")
        .data(wrecks)
        .enter()
        .append("g")
        .attr("class", "wreck")
        .attr("transform", d => `translate(${projection([d.lon, d.lat])})`)
        .each(function(d) {
            const g = d3.select(this);
            // Draw X mark for wreck
            g.append("line")
                .attr("x1", -5).attr("y1", -5)
                .attr("x2", 5).attr("y2", 5)
                .attr("stroke", "#d32f2f")
                .attr("stroke-width", 2);
            g.append("line")
                .attr("x1", -5).attr("y1", 5)
                .attr("x2", 5).attr("y2", -5)
                .attr("stroke", "#d32f2f")
                .attr("stroke-width", 2);
        })
        .on("mouseover", function(event, d) {
            tooltip
                .style("opacity", 1)
                .html(`
                    <strong>${d.name}</strong> (${d.year})<br/>
                    Lake: ${d.lake}<br/>
                    Casualties: ${d.casualties}<br/>
                    Cause: ${d.cause}<br/>
                    Depth: ${d.depth}<br/>
                    Cargo: ${d.cargo}
                `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });

    // Create legend
    const legendDiv = d3.select("#legend");
    legendDiv.html(`
        <div class="legend-title">Legend</div>
        <div style="margin-bottom: 15px;">
            <strong>Voyage Routes by Year:</strong><br/>
            <div style="margin-top: 5px;">
                ${d3.range(minYear, maxYear + 1, Math.ceil((maxYear - minYear) / 5)).map(year =>
                    `<span class="legend-item">
                        <span class="legend-color" style="background: ${colorScale(year)};"></span>
                        ${year}
                    </span>`
                ).join('')}
            </div>
        </div>
        <div>
            <span class="legend-wreck">
                <svg width="20" height="20" style="vertical-align: middle; margin-right: 5px;">
                    <line x1="2" y1="2" x2="18" y2="18" stroke="#d32f2f" stroke-width="2"/>
                    <line x1="2" y1="18" x2="18" y2="2" stroke="#d32f2f" stroke-width="2"/>
                </svg>
                Shipwreck
            </span>
            <span class="legend-item">
                <svg width="20" height="20" style="vertical-align: middle; margin-right: 5px;">
                    <circle cx="10" cy="10" r="4" fill="#333" stroke="#fff" stroke-width="1.5"/>
                </svg>
                Port
            </span>
        </div>
    `);

    // Create statistics
    const statsDiv = d3.select("#stats");
    statsDiv.html(`
        <div class="stat-card">
            <div class="stat-number">${voyages.length}</div>
            <div class="stat-label">Historical Voyages</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${wrecks.length}</div>
            <div class="stat-label">Documented Wrecks</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${ports.length}</div>
            <div class="stat-label">Ports</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${minYear}-${maxYear}</div>
            <div class="stat-label">Year Range</div>
        </div>
    `);

    console.log("Visualization rendered successfully with high-resolution NOAA shoreline data");
    console.log(`- ${voyages.length} voyages`);
    console.log(`- ${wrecks.length} wrecks`);
    console.log(`- ${ports.length} ports`);
    console.log(`- ${greatLakesGeoJSON.features.length} lakes with detailed shorelines`);
    console.log("Projection scale:", projection.scale());
    console.log("Projection translate:", projection.translate());

}).catch(function(error) {
    console.error("Error loading shoreline data:", error);
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#d32f2f")
        .style("font-size", "16px")
        .text("Error loading shoreline data. Please check console for details.");
});
