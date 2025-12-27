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

// Set up projection - fit to GeoJSON bounds
const projection = d3.geoMercator();
const path = d3.geoPath().projection(projection);

// Fit projection to the Great Lakes data
projection.fitSize([width, height], greatLakesGeoJSON);

// JUST RENDER THE LAKES - NOTHING ELSE
svg.selectAll("path")
    .data(greatLakesGeoJSON.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "#4a90e2")
    .attr("stroke", "#2a5298")
    .attr("stroke-width", 2);

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
