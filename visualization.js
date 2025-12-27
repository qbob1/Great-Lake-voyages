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

// Set up projection - use Mercator and fit to the Great Lakes bounds
const projection = d3.geoMercator();
const path = d3.geoPath().projection(projection);

// Fit the projection to the GeoJSON bounds
projection.fitSize([width, height], greatLakesGeoJSON);

// Draw the Great Lakes
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
        tooltip
            .style("opacity", 1)
            .html(`<strong>${d.properties.name}</strong><br/>Area: ${d.properties.area_km2.toLocaleString()} km²`)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseout", function() {
        d3.select(this).attr("fill", "#4a90e2");
        tooltip.style("opacity", 0);
    });

console.log("Lakes rendered successfully");
console.log("Projection scale:", projection.scale());
console.log("Projection translate:", projection.translate());
