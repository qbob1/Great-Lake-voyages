# Great Lakes Voyages & Shipwrecks Visualization

An interactive D3.js visualization showing historical maritime routes and shipwrecks across the Great Lakes (1845-1975).

## Features

- **Interactive Map**: Visual representation of all five Great Lakes (Superior, Michigan, Huron, Erie, and Ontario)
- **Voyage Routes**: 75 historical voyages plotted with curved paths between ports
- **Year-based Color Coding**: Routes colored using a gradient scale from 1840s to 1950s
- **Shipwreck Markers**: 60 major shipwrecks with detailed information
- **Enhanced Tooltips**: Hover over routes to see comprehensive voyage details including captain, tonnage, distance, and duration
- **Wreck Details**: Detailed information for each shipwreck including depth and cargo
- **Statistics Dashboard**: Real-time overview of total voyages, wrecks, and casualties
- **Legend**: Clear explanation of colors and symbols

## Quick Start

1. **Open the visualization**: Simply open `index.html` in a modern web browser
   ```bash
   # On Linux/Mac
   open index.html

   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Interact with the map**:
   - Hover over colored lines to see voyage details
   - Click wreck markers (⊗) to see shipwreck information
   - Hover over ports to see their names and locations

## Project Structure

```
Great-Lake-voyages/
├── index.html          # Main HTML file with layout and styles
├── data.js             # Great Lakes geography, ports, voyages, and wrecks data
├── visualization.js    # D3.js visualization code
└── README.md          # This file
```

## Data Overview

### Voyages
- **Total**: 75 historical voyages
- **Time Period**: 1845-1953
- **Types**: Cargo ships (grain, iron ore, lumber, coal, limestone, taconite) and passenger vessels
- **Data Includes**: Captain names, vessel tonnage, route distance, and journey duration
- **Notable vessels**:
  - Early steamships like Independence (1845) and Phoenix (1847)
  - Iron ore carriers like Western Reserve, Samuel Mather, and William A. Irvin
  - Passenger ships like Lady Elgin, Milwaukee Clipper, and Noronic
  - Modern freighters like Edward L. Ryerson (21,000 tons) and Arthur B. Homer (14,000 tons)

### Shipwrecks
- **Total**: 60 major wrecks
- **Time Span**: 1813-1985
- **Total Casualties**: Over 3,700 lives lost
- **Data Includes**: Wreck depth, cargo carried, and cause of sinking
- **Notable wrecks**:
  - **Eastland** (1915): 844 casualties on Lake Michigan - deadliest Great Lakes disaster
  - **Lady Elgin** (1860): 300 casualties on Lake Michigan
  - **G.P. Griffith** (1850): 286 casualties on Lake Erie
  - **Atlantic** (1852): 250 casualties on Lake Erie
  - **Phoenix** (1847): 190 casualties on Lake Michigan
  - **Steamship Erie** (1841): 175 casualties on Lake Erie
  - **Ontario** (1817): 130 casualties on Lake Ontario
  - **Pewabic** (1865): 125 casualties on Lake Huron
  - **Noronic** (1949): 119 casualties on Lake Ontario
  - **Edmund Fitzgerald** (1975): 29 casualties on Lake Superior
  - **Great Storm of 1913**: Multiple vessels lost including Regina, Charles S. Price, Argus, Hydrus, and Wexford

### Ports
30 major ports across all five lakes, including:
- **Lake Superior**: Duluth, Thunder Bay, Marquette, Sault Ste. Marie, Two Harbors, Ashland
- **Lake Michigan**: Chicago, Milwaukee, Green Bay, Traverse City, Ludington, Muskegon, Grand Haven
- **Lake Huron**: Port Huron, Alpena, Bay City, Rogers City, Mackinaw City
- **Lake Erie**: Detroit, Cleveland, Toledo, Buffalo, Erie, Sandusky, Ashtabula
- **Lake Ontario**: Toronto, Rochester, Kingston, Oswego

## Technologies Used

- **D3.js v7**: Data visualization library
- **HTML5/CSS3**: Structure and styling
- **Vanilla JavaScript**: Application logic

## Color Scale

Routes are colored using the **Viridis** color scale based on the voyage year:
- **Purple/Dark Blue**: 1850s voyages
- **Blue/Teal**: 1870s-1890s voyages
- **Green**: 1900s-1920s voyages
- **Yellow**: 1940s-1950s voyages

## Customization

### Adding New Voyages
Edit `data.js` and add entries to the `voyages` array:
```javascript
{
    id: 76,
    year: 1960,
    vessel: "Ship Name",
    from: "Port A",
    to: "Port B",
    type: "cargo",
    cargo: "iron ore",
    captain: "Captain Name",
    tonnage: 15000,
    distance: 800,
    duration: "4 days"
}
```

### Adding New Wrecks
Edit `data.js` and add entries to the `wrecks` array:
```javascript
{
    name: "Wreck Name",
    year: 1950,
    x: 400,
    y: 300,
    lake: "Superior",
    casualties: 10,
    cause: "Storm",
    depth: "200 ft",
    cargo: "iron ore"
}
```

### Adding New Ports
Edit `data.js` and add entries to the `ports` array:
```javascript
{
    name: "New Port",
    x: 500,
    y: 250,
    lake: "Huron"
}
```

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Historical Context

The Great Lakes have been a vital shipping corridor since the mid-1800s, transporting:
- Iron ore from Lake Superior mines
- Grain from Midwest farms
- Coal for industrial cities
- Passengers between major ports

The lakes have also been the site of numerous disasters due to:
- Severe storms (particularly in November)
- Collisions in heavy shipping traffic
- Fires on wooden vessels
- Structural failures in heavy seas

## Future Enhancements

Potential additions:
- Filter voyages by year range
- Filter by cargo type or vessel type
- Animate routes over time
- Add more historical context
- Include depth charts and hazard zones
- Real historical wreck locations using GPS coordinates
- Weather patterns and storm tracks

## License

This is a demonstration project for educational purposes.

## Credits

Built with D3.js by Claude (Anthropic)
Data is simplified/representative for visualization purposes
