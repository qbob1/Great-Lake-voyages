// Set up dimensions
const width = 1000;
const height = 600;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

// Create SVG
const svg = d3.select("#visualization")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
    .style("width", "100%")
    .style("height", "auto");

// Create tooltip
const tooltip = d3.select("#tooltip");

// Color scale for years
const yearExtent = d3.extent(voyages, d => d.year);
const colorScale = d3.scaleSequential()
    .domain(yearExtent)
    .interpolator(d3.interpolateViridis);

// Set up projection for Great Lakes region
// Albers projection centered on Great Lakes
const projection = d3.geoAlbers()
    .center([-85, 45])
    .rotate([0, 0])
    .parallels([42, 49])
    .scale(2800)
    .translate([width / 2, height / 2]);

// Path generator
const path = d3.geoPath().projection(projection);

// Helper function to get port coordinates (projected)
function getPortCoords(portName) {
    const port = ports.find(p => p.name === portName);
    if (!port) return null;
    const coords = projection([port.lon, port.lat]);
    return { x: coords[0], y: coords[1] };
}

// Helper function to create curved path between two points
function createCurvedPath(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dr = Math.sqrt(dx * dx + dy * dy);

    // Control point for curve
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;

    // Perpendicular offset
    const offset = dr * 0.15;
    const angle = Math.atan2(dy, dx) + Math.PI / 2;
    const cx = mx + Math.cos(angle) * offset;
    const cy = my + Math.sin(angle) * offset;

    return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

// Render the visualization using embedded GeoJSON data
(function() {
    // Draw the Great Lakes
    const lakesGroup = svg.append("g").attr("class", "lakes");

    lakesGroup.selectAll("path")
        .data(greatLakesGeoJSON.features)
        .enter()
        .append("path")
        .attr("class", "lake")
        .attr("d", path)
        .on("mouseover", function(event, d) {
            tooltip
                .style("opacity", 1)
                .html(`<strong>${d.properties.name}</strong><br/>Area: ${d.properties.area_km2.toLocaleString()} km²`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });

    // Draw voyage routes
    const routesGroup = svg.append("g").attr("class", "routes");

    voyages.forEach(voyage => {
        const from = getPortCoords(voyage.from);
        const to = getPortCoords(voyage.to);

        if (from && to) {
            const pathElem = routesGroup.append("path")
                .attr("class", "voyage-path")
                .attr("d", createCurvedPath(from.x, from.y, to.x, to.y))
                .attr("stroke", colorScale(voyage.year))
                .on("mouseover", function(event) {
                    d3.select(this).style("stroke-width", "4");
                    tooltip
                        .style("opacity", 1)
                        .html(`
                            <strong>🚢 ${voyage.vessel}</strong> (${voyage.year})<br/>
                            <strong>Route:</strong> ${voyage.from} → ${voyage.to}<br/>
                            <strong>Captain:</strong> ${voyage.captain}<br/>
                            <strong>Type:</strong> ${voyage.type}<br/>
                            <strong>Cargo:</strong> ${voyage.cargo}<br/>
                            <strong>Tonnage:</strong> ${voyage.tonnage.toLocaleString()} tons<br/>
                            <strong>Distance:</strong> ${voyage.distance} miles<br/>
                            <strong>Duration:</strong> ${voyage.duration}
                        `)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 10) + "px");
                })
                .on("mouseout", function() {
                    d3.select(this).style("stroke-width", "2");
                    tooltip.style("opacity", 0);
                });
        }
    });

    // Draw wrecks
    const wrecksGroup = svg.append("g").attr("class", "wrecks");

    wrecksGroup.selectAll(".wreck")
        .data(wrecks)
        .enter()
        .append("g")
        .attr("class", "wreck")
        .attr("transform", d => {
            const coords = projection([d.lon, d.lat]);
            return `translate(${coords[0]},${coords[1]})`;
        })
        .each(function(d) {
            const g = d3.select(this);

            // Wreck symbol - X mark
            g.append("path")
                .attr("d", "M-6,-6 L6,6 M-6,6 L6,-6")
                .attr("stroke", "#d32f2f")
                .attr("stroke-width", 3)
                .attr("fill", "none");

            // Circle background
            g.append("circle")
                .attr("r", 8)
                .attr("fill", "none")
                .attr("stroke", "#d32f2f")
                .attr("stroke-width", 2);
        })
        .on("mouseover", function(event, d) {
            tooltip
                .style("opacity", 1)
                .html(`
                    <strong>⚓ ${d.name}</strong><br/>
                    <strong>Year:</strong> ${d.year}<br/>
                    <strong>Lake:</strong> ${d.lake}<br/>
                    <strong>Casualties:</strong> ${d.casualties}<br/>
                    <strong>Cause:</strong> ${d.cause}<br/>
                    <strong>Depth:</strong> ${d.depth}<br/>
                    <strong>Cargo:</strong> ${d.cargo}
                `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });

    // Draw ports
    const portsGroup = svg.append("g").attr("class", "ports");

    portsGroup.selectAll(".port")
        .data(ports)
        .enter()
        .append("circle")
        .attr("class", "port")
        .attr("cx", d => projection([d.lon, d.lat])[0])
        .attr("cy", d => projection([d.lon, d.lat])[1])
        .attr("r", 4)
        .on("mouseover", function(event, d) {
            tooltip
                .style("opacity", 1)
                .html(`<strong>Port: ${d.name}</strong><br/>Lake: ${d.lake}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 10) + "px");
        })
        .on("mouseout", function() {
            tooltip.style("opacity", 0);
        });

    // Add port labels for major ports
    const majorPorts = ["Chicago", "Detroit", "Cleveland", "Buffalo", "Duluth", "Milwaukee", "Toronto"];
    portsGroup.selectAll(".port-label")
        .data(ports.filter(p => majorPorts.includes(p.name)))
        .enter()
        .append("text")
        .attr("class", "port-label")
        .attr("x", d => projection([d.lon, d.lat])[0])
        .attr("y", d => projection([d.lon, d.lat])[1] - 10)
        .attr("text-anchor", "middle")
        .text(d => d.name);

    console.log("Great Lakes Voyages Visualization loaded successfully!");
    console.log(`Displaying ${voyages.length} voyages and ${wrecks.length} shipwrecks`);
})();

// Create statistics
const stats = d3.select("#stats");
stats.append("div")
    .attr("class", "stat-card")
    .html(`<div class="stat-number">${voyages.length}</div><div class="stat-label">Total Voyages</div>`);

stats.append("div")
    .attr("class", "stat-card")
    .html(`<div class="stat-number">${wrecks.length}</div><div class="stat-label">Shipwrecks</div>`);

stats.append("div")
    .attr("class", "stat-card")
    .html(`<div class="stat-number">${wrecks.reduce((sum, w) => sum + w.casualties, 0).toLocaleString()}</div><div class="stat-label">Total Casualties</div>`);

stats.append("div")
    .attr("class", "stat-card")
    .html(`<div class="stat-number">${yearExtent[0]}-${yearExtent[1]}</div><div class="stat-label">Time Period</div>`);

// Create legend
const legend = d3.select("#legend");

// Year color legend
legend.append("div")
    .attr("class", "legend-title")
    .text("Voyage Routes by Year");

const legendItems = legend.append("div").attr("class", "legend-years");

// Create gradient legend for years
const yearSamples = d3.range(yearExtent[0], yearExtent[1] + 1, 20);
yearSamples.forEach(year => {
    legendItems.append("div")
        .attr("class", "legend-item")
        .html(`
            <span class="legend-color" style="background: ${colorScale(year)}"></span>
            <span>${year}</span>
        `);
});

// Wreck legend
legend.append("div")
    .attr("class", "legend-wreck")
    .html(`
        <svg width="30" height="20" style="vertical-align: middle; margin-right: 10px;">
            <circle cx="10" cy="10" r="8" fill="none" stroke="#d32f2f" stroke-width="2"/>
            <path d="M4,4 L16,16 M4,16 L16,4" stroke="#d32f2f" stroke-width="3" fill="none"/>
        </svg>
        <span style="color: #333; font-weight: bold;">Shipwreck Location</span>
    `);

// Port legend
legend.append("div")
    .attr("class", "legend-wreck")
    .html(`
        <svg width="30" height="20" style="vertical-align: middle; margin-right: 10px;">
            <circle cx="10" cy="10" r="4" fill="#333" stroke="#fff" stroke-width="1.5"/>
        </svg>
        <span style="color: #333; font-weight: bold;">Major Port</span>
    `);
