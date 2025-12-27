// Great Lakes GeoJSON data (embedded for easy loading)
const greatLakesGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Lake Superior",
        "area_km2": 82100
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-92.09, 46.78], [-91.60, 46.98], [-90.82, 47.20], [-89.50, 48.01],
          [-88.38, 48.24], [-87.48, 48.12], [-86.82, 47.81], [-85.98, 47.41],
          [-85.24, 47.10], [-84.73, 46.81], [-84.50, 46.54], [-84.37, 46.36],
          [-84.55, 46.24], [-84.80, 46.42], [-85.10, 46.49], [-85.53, 46.73],
          [-86.10, 46.95], [-86.52, 46.93], [-86.95, 46.78], [-87.35, 46.53],
          [-87.78, 46.42], [-88.62, 46.68], [-89.50, 46.68], [-90.30, 46.56],
          [-90.97, 46.67], [-91.35, 46.71], [-91.70, 46.75], [-92.09, 46.78]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lake Michigan",
        "area_km2": 58000
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-87.03, 45.85], [-86.49, 45.79], [-85.89, 45.78], [-85.41, 45.94],
          [-85.05, 45.97], [-84.79, 45.75], [-84.73, 45.49], [-84.95, 45.27],
          [-85.39, 45.04], [-85.58, 44.85], [-85.89, 44.77], [-86.18, 44.58],
          [-86.26, 44.40], [-86.39, 44.17], [-86.47, 43.92], [-86.54, 43.69],
          [-86.58, 43.42], [-86.59, 43.15], [-86.55, 42.82], [-86.51, 42.62],
          [-86.51, 42.38], [-86.54, 42.08], [-86.78, 41.77], [-87.04, 41.67],
          [-87.30, 41.61], [-87.53, 41.79], [-87.68, 42.05], [-87.76, 42.32],
          [-87.79, 42.56], [-87.75, 42.83], [-87.73, 43.15], [-87.74, 43.46],
          [-87.79, 43.84], [-87.80, 44.18], [-87.77, 44.51], [-87.67, 44.87],
          [-87.55, 45.18], [-87.40, 45.42], [-87.22, 45.63], [-87.03, 45.85]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lake Huron",
        "area_km2": 59600
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-84.73, 46.81], [-84.50, 46.54], [-84.37, 46.36], [-83.85, 46.12],
          [-83.49, 46.09], [-83.42, 45.97], [-83.56, 45.82], [-83.82, 45.74],
          [-84.09, 45.65], [-84.20, 45.48], [-84.09, 45.28], [-83.86, 45.14],
          [-83.62, 45.06], [-83.46, 44.98], [-83.34, 44.87], [-83.22, 44.75],
          [-83.05, 44.59], [-82.92, 44.45], [-82.73, 44.22], [-82.60, 44.04],
          [-82.53, 43.84], [-82.42, 43.62], [-82.30, 43.45], [-82.18, 43.27],
          [-82.01, 43.16], [-81.79, 43.08], [-81.49, 43.04], [-81.26, 42.95],
          [-81.13, 42.86], [-81.01, 42.75], [-81.29, 42.78], [-81.67, 42.91],
          [-82.05, 43.08], [-82.31, 43.26], [-82.52, 43.50], [-82.72, 43.75],
          [-82.86, 44.02], [-83.03, 44.22], [-83.22, 44.41], [-83.43, 44.62],
          [-83.65, 44.78], [-83.89, 44.96], [-84.11, 45.15], [-84.29, 45.38],
          [-84.42, 45.60], [-84.55, 45.82], [-84.70, 46.08], [-84.79, 46.29],
          [-84.80, 46.50], [-84.73, 46.81]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lake Erie",
        "area_km2": 25700
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-83.15, 41.99], [-82.89, 41.72], [-82.75, 41.61], [-82.50, 41.55],
          [-82.20, 41.50], [-81.85, 41.61], [-81.51, 41.73], [-81.17, 41.84],
          [-80.78, 41.96], [-80.37, 42.08], [-80.05, 42.16], [-79.76, 42.27],
          [-79.05, 42.78], [-78.91, 42.85], [-78.89, 42.95], [-78.95, 43.03],
          [-79.04, 43.11], [-79.25, 43.19], [-79.56, 43.25], [-79.88, 43.24],
          [-80.20, 43.17], [-80.47, 43.07], [-80.71, 42.96], [-81.01, 42.85],
          [-81.25, 42.78], [-81.54, 42.72], [-81.84, 42.68], [-82.18, 42.65],
          [-82.51, 42.63], [-82.83, 42.69], [-82.96, 42.80], [-83.08, 42.93],
          [-83.13, 43.09], [-83.20, 43.23], [-83.12, 43.10], [-83.10, 42.93],
          [-83.14, 42.78], [-83.18, 42.62], [-83.20, 42.45], [-83.19, 42.28],
          [-83.15, 42.09], [-83.15, 41.99]
        ]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lake Ontario",
        "area_km2": 19000
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-79.88, 43.24], [-79.56, 43.25], [-79.25, 43.19], [-79.04, 43.11],
          [-78.95, 43.03], [-78.91, 42.95], [-78.89, 42.85], [-78.57, 42.95],
          [-78.23, 43.06], [-77.82, 43.20], [-77.42, 43.35], [-76.96, 43.54],
          [-76.51, 43.73], [-76.35, 43.88], [-76.30, 44.04], [-76.37, 44.17],
          [-76.52, 44.27], [-76.73, 44.33], [-77.02, 44.36], [-77.35, 44.36],
          [-77.70, 44.32], [-78.06, 44.24], [-78.42, 44.14], [-78.75, 44.03],
          [-79.09, 43.90], [-79.40, 43.75], [-79.67, 43.59], [-79.82, 43.43],
          [-79.88, 43.30], [-79.88, 43.24]
        ]]
      }
    }
  ]
};

// Major ports with real geographic coordinates (latitude, longitude)
const ports = [
    // Lake Superior
    { name: "Duluth", lat: 46.7867, lon: -92.1005, lake: "Superior" },
    { name: "Thunder Bay", lat: 48.3809, lon: -89.2477, lake: "Superior" },
    { name: "Sault Ste. Marie", lat: 46.4953, lon: -84.3453, lake: "Superior" },
    { name: "Marquette", lat: 46.5436, lon: -87.3954, lake: "Superior" },
    { name: "Ashland", lat: 46.5847, lon: -90.8857, lake: "Superior" },
    { name: "Two Harbors", lat: 47.0227, lon: -91.6707, lake: "Superior" },

    // Lake Michigan
    { name: "Milwaukee", lat: 43.0389, lon: -87.9065, lake: "Michigan" },
    { name: "Chicago", lat: 41.8781, lon: -87.6298, lake: "Michigan" },
    { name: "Green Bay", lat: 44.5133, lon: -88.0133, lake: "Michigan" },
    { name: "Traverse City", lat: 44.7631, lon: -85.6206, lake: "Michigan" },
    { name: "Ludington", lat: 43.9553, lon: -86.4526, lake: "Michigan" },
    { name: "Muskegon", lat: 43.2342, lon: -86.2484, lake: "Michigan" },
    { name: "Grand Haven", lat: 43.0631, lon: -86.2284, lake: "Michigan" },

    // Lake Huron
    { name: "Alpena", lat: 45.0617, lon: -83.4327, lake: "Huron" },
    { name: "Port Huron", lat: 42.9709, lon: -82.4249, lake: "Huron" },
    { name: "Mackinaw City", lat: 45.7772, lon: -84.7294, lake: "Huron" },
    { name: "Bay City", lat: 43.5945, lon: -83.8889, lake: "Huron" },
    { name: "Rogers City", lat: 45.4214, lon: -83.8185, lake: "Huron" },

    // Lake Erie
    { name: "Detroit", lat: 42.3314, lon: -83.0458, lake: "Erie" },
    { name: "Toledo", lat: 41.6528, lon: -83.5379, lake: "Erie" },
    { name: "Cleveland", lat: 41.4993, lon: -81.6944, lake: "Erie" },
    { name: "Buffalo", lat: 42.8864, lon: -78.8784, lake: "Erie" },
    { name: "Erie", lat: 42.1292, lon: -80.0851, lake: "Erie" },
    { name: "Sandusky", lat: 41.4489, lon: -82.7088, lake: "Erie" },
    { name: "Ashtabula", lat: 41.8651, lon: -80.7898, lake: "Erie" },

    // Lake Ontario
    { name: "Rochester", lat: 43.1566, lon: -77.6088, lake: "Ontario" },
    { name: "Toronto", lat: 43.6532, lon: -79.3832, lake: "Ontario" },
    { name: "Kingston", lat: 44.2312, lon: -76.4860, lake: "Ontario" },
    { name: "Oswego", lat: 43.4556, lon: -76.5105, lake: "Ontario" }
];

// Historical voyages with routes
const voyages = [
    // 1840s - Early era
    { id: 1, year: 1845, vessel: "Independence", from: "Buffalo", to: "Chicago", type: "passenger", cargo: "passengers", captain: "J.B. Wilson", tonnage: 712, distance: 850, duration: "4 days" },
    { id: 2, year: 1847, vessel: "Phoenix", from: "Buffalo", to: "Milwaukee", type: "passenger", cargo: "immigrants", captain: "G.B. Sweet", tonnage: 450, distance: 810, duration: "5 days" },
    { id: 3, year: 1848, vessel: "Ocean", from: "Detroit", to: "Cleveland", type: "cargo", cargo: "lumber", captain: "T.R. Merritt", tonnage: 320, distance: 95, duration: "18 hours" },

    // 1850s - Early steamship era
    { id: 4, year: 1852, vessel: "Northern Indiana", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "John McKay", tonnage: 890, distance: 850, duration: "3 days" },
    { id: 5, year: 1853, vessel: "Plymouth Rock", from: "Detroit", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "E.B. Ward", tonnage: 625, distance: 265, duration: "2 days" },
    { id: 6, year: 1855, vessel: "Lady Elgin", from: "Milwaukee", to: "Chicago", type: "passenger", cargo: "passengers", captain: "Jack Wilson", tonnage: 1037, distance: 85, duration: "12 hours" },
    { id: 7, year: 1856, vessel: "Granite State", from: "Cleveland", to: "Detroit", type: "cargo", cargo: "manufactured goods", captain: "Samuel Ward", tonnage: 780, distance: 95, duration: "20 hours" },
    { id: 8, year: 1858, vessel: "Western Metropolis", from: "Detroit", to: "Chicago", type: "cargo", cargo: "manufactured goods", captain: "R.C. Bristol", tonnage: 1200, distance: 280, duration: "2 days" },
    { id: 9, year: 1859, vessel: "Milwaukee", from: "Milwaukee", to: "Grand Haven", type: "passenger", cargo: "passengers", captain: "Charles Napier", tonnage: 800, distance: 75, duration: "10 hours" },

    // 1860s - Civil War era
    { id: 10, year: 1862, vessel: "Sunbeam", from: "Chicago", to: "Milwaukee", type: "cargo", cargo: "grain", captain: "William Bates", tonnage: 650, distance: 85, duration: "14 hours" },
    { id: 11, year: 1864, vessel: "Pewabic", from: "Sault Ste. Marie", to: "Cleveland", type: "cargo", cargo: "copper ore", captain: "George McKay", tonnage: 582, distance: 420, duration: "3 days" },
    { id: 12, year: 1866, vessel: "Dean Richmond", from: "Buffalo", to: "Chicago", type: "cargo", cargo: "general freight", captain: "J.D. Parsons", tonnage: 1400, distance: 850, duration: "4 days" },
    { id: 13, year: 1867, vessel: "Seabird", from: "Milwaukee", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "C.W. Trowell", tonnage: 675, distance: 880, duration: "4 days" },
    { id: 14, year: 1869, vessel: "R.G. Coburn", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "Thomas Wilson", tonnage: 1450, distance: 940, duration: "5 days" },

    // 1870s - Expansion era
    { id: 15, year: 1871, vessel: "Alpena", from: "Alpena", to: "Chicago", type: "cargo", cargo: "lumber", captain: "Napoleon Napier", tonnage: 850, distance: 320, duration: "2 days" },
    { id: 16, year: 1872, vessel: "Lac La Belle", from: "Detroit", to: "Toledo", type: "cargo", cargo: "coal", captain: "George C. Weeks", tonnage: 550, distance: 55, duration: "10 hours" },
    { id: 17, year: 1873, vessel: "City of Detroit", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "Robert Holland", tonnage: 1200, distance: 95, duration: "18 hours" },
    { id: 18, year: 1874, vessel: "Messenger", from: "Chicago", to: "Duluth", type: "cargo", cargo: "general merchandise", captain: "H.W. Sage", tonnage: 780, distance: 480, duration: "3 days" },
    { id: 19, year: 1875, vessel: "Riverside", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "Peter G. Minch", tonnage: 1650, distance: 940, duration: "5 days" },
    { id: 20, year: 1876, vessel: "Northern Queen", from: "Milwaukee", to: "Sault Ste. Marie", type: "cargo", cargo: "grain", captain: "James Davidson", tonnage: 920, distance: 340, duration: "2 days" },
    { id: 21, year: 1878, vessel: "Marquette", from: "Marquette", to: "Toledo", type: "cargo", cargo: "iron ore", captain: "John Pridgeon", tonnage: 1580, distance: 520, duration: "3 days" },
    { id: 22, year: 1879, vessel: "Onoko", from: "Two Harbors", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Robert Wallace", tonnage: 2164, distance: 850, duration: "4 days" },

    // 1880s - Iron boom
    { id: 23, year: 1881, vessel: "Vernon", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "E.S. Peck", tonnage: 1100, distance: 850, duration: "4 days" },
    { id: 24, year: 1883, vessel: "India", from: "Cleveland", to: "Duluth", type: "cargo", cargo: "coal", captain: "W.H. Singer", tonnage: 1450, distance: 840, duration: "4 days" },
    { id: 25, year: 1884, vessel: "Australia", from: "Marquette", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "John McLeod", tonnage: 1750, distance: 780, duration: "4 days" },
    { id: 26, year: 1886, vessel: "Wilson", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "James Corrigan", tonnage: 1900, distance: 840, duration: "4 days" },
    { id: 27, year: 1888, vessel: "Iosco", from: "Port Huron", to: "Chicago", type: "cargo", cargo: "lumber", captain: "Thomas Hawgood", tonnage: 820, distance: 310, duration: "2 days" },

    // 1890s - Golden age
    { id: 28, year: 1891, vessel: "Western Reserve", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Albert Myers", tonnage: 2392, distance: 840, duration: "4 days" },
    { id: 29, year: 1892, vessel: "Christopher Columbus", from: "Milwaukee", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "Joseph Hogan", tonnage: 1511, distance: 880, duration: "3 days" },
    { id: 30, year: 1893, vessel: "Milwaukee", from: "Milwaukee", to: "Sault Ste. Marie", type: "cargo", cargo: "grain", captain: "Robert McKay", tonnage: 1650, distance: 340, duration: "2 days" },
    { id: 31, year: 1894, vessel: "Jay Gould", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "wheat", captain: "Patrick Keenan", tonnage: 2100, distance: 940, duration: "5 days" },
    { id: 32, year: 1895, vessel: "Chicora", from: "Milwaukee", to: "Sault Ste. Marie", type: "passenger", cargo: "passengers", captain: "Edward C. Stines", tonnage: 900, distance: 340, duration: "2 days" },
    { id: 33, year: 1896, vessel: "Virginia", from: "Two Harbors", to: "Ashtabula", type: "cargo", cargo: "iron ore", captain: "D.S. Trowell", tonnage: 2750, distance: 820, duration: "4 days" },
    { id: 34, year: 1897, vessel: "Victory", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "J.C. Gilchrist", tonnage: 2200, distance: 850, duration: "4 days" },
    { id: 35, year: 1898, vessel: "Pennsylvania", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "W.R. Hanna", tonnage: 2400, distance: 850, duration: "3 days" },
    { id: 36, year: 1899, vessel: "Samuel Mather", from: "Marquette", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Henry W. Smith", tonnage: 4400, distance: 710, duration: "3 days" },

    // 1900s-1910s - Steel era
    { id: 37, year: 1901, vessel: "Thomas F. Cole", from: "Duluth", to: "Erie", type: "cargo", cargo: "iron ore", captain: "William Bassett", tonnage: 3850, distance: 890, duration: "4 days" },
    { id: 38, year: 1902, vessel: "Bannockburn", from: "Port Huron", to: "Duluth", type: "cargo", cargo: "coal", captain: "George Wood", tonnage: 1620, distance: 630, duration: "4 days" },
    { id: 39, year: 1903, vessel: "Augustus B. Wolvin", from: "Two Harbors", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "George R. Seaverns", tonnage: 4850, distance: 950, duration: "5 days" },
    { id: 40, year: 1904, vessel: "Presque Isle", from: "Duluth", to: "Ashtabula", type: "cargo", cargo: "iron ore", captain: "J.S. Dunham", tonnage: 5500, distance: 870, duration: "4 days" },
    { id: 41, year: 1905, vessel: "Iosco", from: "Cleveland", to: "Duluth", type: "cargo", cargo: "general freight", captain: "Frank Root", tonnage: 2050, distance: 840, duration: "4 days" },
    { id: 42, year: 1906, vessel: "William E. Corey", from: "Marquette", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Fred N. Johnson", tonnage: 5600, distance: 710, duration: "3 days" },
    { id: 43, year: 1907, vessel: "Wilpen", from: "Toledo", to: "Duluth", type: "cargo", cargo: "coal", captain: "James Walsh", tonnage: 3200, distance: 810, duration: "4 days" },
    { id: 44, year: 1908, vessel: "J. Pierpont Morgan", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "wheat", captain: "Charles S. Redfern", tonnage: 6200, distance: 940, duration: "5 days" },
    { id: 45, year: 1909, vessel: "Clarion", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "W.R. Jones", tonnage: 3800, distance: 850, duration: "4 days" },
    { id: 46, year: 1910, vessel: "George Stephenson", from: "Port Huron", to: "Chicago", type: "cargo", cargo: "coal", captain: "Michael Kennedy", tonnage: 4100, distance: 310, duration: "2 days" },
    { id: 47, year: 1911, vessel: "Henry B. Smith", from: "Marquette", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Owen McCarthy", tonnage: 5500, distance: 710, duration: "3 days" },
    { id: 48, year: 1912, vessel: "Howard M. Hanna Jr.", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "W.C. Richardson", tonnage: 5800, distance: 940, duration: "5 days" },
    { id: 49, year: 1913, vessel: "Charles S. Price", from: "Milwaukee", to: "Kingston", type: "cargo", cargo: "coal", captain: "William Black", tonnage: 5000, distance: 720, duration: "4 days" },
    { id: 50, year: 1913, vessel: "James Carruthers", from: "Duluth", to: "Toronto", type: "cargo", cargo: "wheat", captain: "William H. Wright", tonnage: 7500, distance: 860, duration: "4 days" },
    { id: 51, year: 1914, vessel: "L.C. Waldo", from: "Two Harbors", to: "Ashtabula", type: "cargo", cargo: "iron ore", captain: "John Duddleson", tonnage: 7000, distance: 820, duration: "4 days" },
    { id: 52, year: 1915, vessel: "George C. Crawford", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "grain", captain: "George Black", tonnage: 6200, distance: 840, duration: "4 days" },

    // 1920s-1930s - Modern era
    { id: 53, year: 1921, vessel: "Ralph Watson", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain", captain: "John Morrison", tonnage: 5800, distance: 850, duration: "3 days" },
    { id: 54, year: 1923, vessel: "Henry Cort", from: "Duluth", to: "Erie", type: "cargo", cargo: "iron ore", captain: "C.H. Moller", tonnage: 6500, distance: 890, duration: "4 days" },
    { id: 55, year: 1924, vessel: "Senator", from: "Port Huron", to: "Chicago", type: "cargo", cargo: "automobiles", captain: "Frank Brown", tonnage: 4200, distance: 310, duration: "2 days" },
    { id: 56, year: 1925, vessel: "Andaste", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "Albert Anderson", tonnage: 5800, distance: 940, duration: "5 days" },
    { id: 57, year: 1927, vessel: "Kamloops", from: "Thunder Bay", to: "Toledo", type: "cargo", cargo: "grain", captain: "William Brian", tonnage: 2400, distance: 780, duration: "4 days" },
    { id: 58, year: 1928, vessel: "Robert C. Stanley", from: "Chicago", to: "Cleveland", type: "cargo", cargo: "grain", captain: "James Watts", tonnage: 6100, distance: 510, duration: "3 days" },
    { id: 59, year: 1929, vessel: "Milwaukee Clipper", from: "Milwaukee", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "Robert McKenzie", tonnage: 4400, distance: 480, duration: "2 days" },
    { id: 60, year: 1930, vessel: "W.C. Franz", from: "Duluth", to: "Ashtabula", type: "cargo", cargo: "iron ore", captain: "E.L. Kanaby", tonnage: 7200, distance: 870, duration: "4 days" },
    { id: 61, year: 1932, vessel: "Philip R. Clarke", from: "Two Harbors", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Clarence Dougal", tonnage: 5950, distance: 850, duration: "4 days" },
    { id: 62, year: 1933, vessel: "George M. Cox", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore", captain: "C.W. Allen", tonnage: 6800, distance: 940, duration: "5 days" },
    { id: 63, year: 1935, vessel: "William A. Irvin", from: "Duluth", to: "Toledo", type: "cargo", cargo: "iron ore", captain: "E.B. Dexter", tonnage: 13000, distance: 810, duration: "4 days" },
    { id: 64, year: 1937, vessel: "Benjamin F. Fairless", from: "Marquette", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "F.J. King", tonnage: 12500, distance: 710, duration: "3 days" },
    { id: 65, year: 1938, vessel: "Arthur B. Homer", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "grain", captain: "W.C. Jordan", tonnage: 14000, distance: 940, duration: "5 days" },

    // 1940s-1950s - War and post-war
    { id: 66, year: 1940, vessel: "Anna C. Minch", from: "Chicago", to: "Detroit", type: "cargo", cargo: "coal", captain: "George Wilson", tonnage: 5200, distance: 280, duration: "2 days" },
    { id: 67, year: 1942, vessel: "Cedarville", from: "Sault Ste. Marie", to: "Chicago", type: "cargo", cargo: "limestone", captain: "Martin Joppich", tonnage: 8575, distance: 340, duration: "2 days" },
    { id: 68, year: 1943, vessel: "Edward Y. Townsend", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Richard Wilson", tonnage: 12000, distance: 840, duration: "4 days" },
    { id: 69, year: 1945, vessel: "Noronic", from: "Detroit", to: "Toronto", type: "passenger", cargo: "passengers", captain: "William Taylor", tonnage: 6905, distance: 240, duration: "18 hours" },
    { id: 70, year: 1946, vessel: "Joseph H. Thompson", from: "Two Harbors", to: "Erie", type: "cargo", cargo: "iron ore", captain: "Harold Smith", tonnage: 13500, distance: 890, duration: "4 days" },
    { id: 71, year: 1948, vessel: "Philip R. Clarke", from: "Duluth", to: "Ashtabula", type: "cargo", cargo: "taconite", captain: "James Brown", tonnage: 5950, distance: 870, duration: "4 days" },
    { id: 72, year: 1949, vessel: "Eastcliffe Hall", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "Frederick Jones", tonnage: 7200, distance: 840, duration: "4 days" },
    { id: 73, year: 1950, vessel: "Carl D. Bradley", from: "Marquette", to: "Buffalo", type: "cargo", cargo: "limestone", captain: "Roland Bryan", tonnage: 10028, distance: 780, duration: "4 days" },
    { id: 74, year: 1952, vessel: "Edward L. Ryerson", from: "Duluth", to: "Toledo", type: "cargo", cargo: "iron ore", captain: "Charles Anderson", tonnage: 21000, distance: 810, duration: "3 days" },
    { id: 75, year: 1953, vessel: "John G. Munson", from: "Two Harbors", to: "Cleveland", type: "cargo", cargo: "iron ore", captain: "William Murphy", tonnage: 18000, distance: 850, duration: "4 days" }
];

// Historical shipwrecks with real geographic coordinates (latitude, longitude)
const wrecks = [
    // Lake Superior wrecks
    { name: "Edmund Fitzgerald", year: 1975, lat: 46.9960, lon: -85.1094, lake: "Superior", casualties: 29, cause: "Storm", depth: "530 ft", cargo: "taconite pellets" },
    { name: "SS Kamloops", year: 1927, lat: 48.1167, lon: -88.4667, lake: "Superior", casualties: 22, cause: "Storm", depth: "270 ft", cargo: "general freight" },
    { name: "Cyprus", year: 1907, lat: 47.3556, lon: -89.9333, lake: "Superior", casualties: 7, cause: "Storm", depth: "460 ft", cargo: "iron ore" },
    { name: "Emperor", year: 1947, lat: 47.0333, lon: -85.0167, lake: "Superior", casualties: 12, cause: "Collision", depth: "175 ft", cargo: "iron ore" },
    { name: "Henry B. Smith", year: 1913, lat: 46.7333, lon: -87.5833, lake: "Superior", casualties: 25, cause: "Storm", depth: "535 ft", cargo: "iron ore" },
    { name: "Bannockburn", year: 1902, lat: 47.8500, lon: -87.3500, lake: "Superior", casualties: 21, cause: "Storm", depth: "unknown", cargo: "grain" },
    { name: "SS Gunilda", year: 1911, lat: 48.7500, lon: -88.5833, lake: "Superior", casualties: 0, cause: "Grounded", depth: "240 ft", cargo: "none" },
    { name: "Metropolis", year: 1886, lat: 46.9667, lon: -90.6667, lake: "Superior", casualties: 0, cause: "Storm", depth: "65 ft", cargo: "wheat" },
    { name: "SS America", year: 1928, lat: 47.7500, lon: -85.5333, lake: "Superior", casualties: 0, cause: "Grounded", depth: "shallow", cargo: "none" },
    { name: "Benjamin Noble", year: 1914, lat: 47.1667, lon: -90.0833, lake: "Superior", casualties: 20, cause: "Storm", depth: "210 ft", cargo: "iron ore" },

    // Lake Michigan wrecks
    { name: "Lady Elgin", year: 1860, lat: 42.1500, lon: -87.6667, lake: "Michigan", casualties: 300, cause: "Collision", depth: "52 ft", cargo: "passengers" },
    { name: "Eastland", year: 1915, lat: 41.8881, lon: -87.6198, lake: "Michigan", casualties: 844, cause: "Capsized", depth: "18 ft", cargo: "passengers" },
    { name: "Carl D. Bradley", year: 1958, lat: 45.7833, lon: -85.8667, lake: "Michigan", casualties: 33, cause: "Storm", depth: "360 ft", cargo: "limestone" },
    { name: "Chicora", year: 1895, lat: 43.9167, lon: -86.4167, lake: "Michigan", casualties: 24, cause: "Storm", depth: "unknown", cargo: "passengers" },
    { name: "Rouse Simmons", year: 1912, lat: 44.9667, lon: -87.1500, lake: "Michigan", casualties: 17, cause: "Storm", depth: "165 ft", cargo: "Christmas trees" },
    { name: "Alpena", year: 1880, lat: 43.6000, lon: -86.3500, lake: "Michigan", casualties: 60, cause: "Storm", depth: "unknown", cargo: "general freight" },
    { name: "Phoenix", year: 1847, lat: 43.8500, lon: -87.5000, lake: "Michigan", casualties: 190, cause: "Fire", depth: "shallow", cargo: "immigrants" },
    { name: "Seabird", year: 1868, lat: 44.6667, lon: -86.0667, lake: "Michigan", casualties: 70, cause: "Fire", depth: "unknown", cargo: "passengers" },
    { name: "Andaste", year: 1929, lat: 45.5667, lon: -86.5167, lake: "Michigan", casualties: 25, cause: "Storm", depth: "280 ft", cargo: "iron ore" },
    { name: "Francisco Morazan", year: 1960, lat: 45.8367, lon: -86.0667, lake: "Michigan", casualties: 0, cause: "Grounded", depth: "shallow", cargo: "general freight" },
    { name: "Wisconsin", year: 1929, lat: 42.6333, lon: -87.8667, lake: "Michigan", casualties: 0, cause: "Collision", depth: "35 ft", cargo: "grain" },
    { name: "W.H. Gilcher", year: 1892, lat: 44.2000, lon: -86.3333, lake: "Michigan", casualties: 21, cause: "Storm", depth: "unknown", cargo: "coal" },

    // Lake Huron wrecks
    { name: "Alpena", year: 1880, lat: 44.9000, lon: -83.1000, lake: "Huron", casualties: 60, cause: "Storm", depth: "unknown", cargo: "general freight" },
    { name: "Daniel J. Morrell", year: 1966, lat: 43.8167, lon: -82.8833, lake: "Huron", casualties: 28, cause: "Broke in half", depth: "220 ft", cargo: "taconite" },
    { name: "Cedarville", year: 1965, lat: 45.8333, lon: -84.8333, lake: "Huron", casualties: 10, cause: "Collision", depth: "100 ft", cargo: "limestone" },
    { name: "Regina", year: 1913, lat: 43.4667, lon: -82.2167, lake: "Huron", casualties: 28, cause: "Storm", depth: "80 ft", cargo: "general freight" },
    { name: "Charles S. Price", year: 1913, lat: 43.6333, lon: -82.5833, lake: "Huron", casualties: 28, cause: "Storm", depth: "30 ft", cargo: "coal" },
    { name: "Argus", year: 1913, lat: 44.6833, lon: -83.3000, lake: "Huron", casualties: 25, cause: "Storm", depth: "50 ft", cargo: "coal" },
    { name: "Hydrus", year: 1913, lat: 44.1333, lon: -83.0333, lake: "Huron", casualties: 25, cause: "Storm", depth: "unknown", cargo: "iron ore" },
    { name: "John A. McGean", year: 1913, lat: 45.2500, lon: -83.5667, lake: "Huron", casualties: 28, cause: "Storm", depth: "unknown", cargo: "coal" },
    { name: "Wexford", year: 1913, lat: 45.1167, lon: -83.9333, lake: "Huron", casualties: 20, cause: "Storm", depth: "85 ft", cargo: "grain" },
    { name: "Pewabic", year: 1865, lat: 45.9000, lon: -84.6667, lake: "Huron", casualties: 125, cause: "Collision", depth: "165 ft", cargo: "copper ore" },
    { name: "Marquette", year: 1868, lat: 44.5000, lon: -83.0000, lake: "Huron", casualties: 14, cause: "Collision", depth: "shallow", cargo: "iron ore" },
    { name: "Sandusky", year: 1856, lat: 44.2333, lon: -82.9000, lake: "Huron", casualties: 0, cause: "Fire", depth: "shallow", cargo: "general freight" },

    // Lake Erie wrecks
    { name: "Atlantic", year: 1852, lat: 42.6000, lon: -79.8000, lake: "Erie", casualties: 250, cause: "Collision", depth: "shallow", cargo: "immigrants" },
    { name: "G.P. Griffith", year: 1850, lat: 41.7000, lon: -81.2000, lake: "Erie", casualties: 286, cause: "Fire", depth: "shallow", cargo: "passengers" },
    { name: "Marquette & Bessemer No. 2", year: 1909, lat: 42.5833, lon: -79.2500, lake: "Erie", casualties: 36, cause: "Storm", depth: "unknown", cargo: "railroad cars" },
    { name: "Steamship Erie", year: 1841, lat: 42.2333, lon: -80.1000, lake: "Erie", casualties: 175, cause: "Fire", depth: "shallow", cargo: "passengers" },
    { name: "Phoenix", year: 1819, lat: 42.8000, lon: -78.9000, lake: "Erie", casualties: 6, cause: "Fire", depth: "shallow", cargo: "general freight" },
    { name: "Anthony Wayne", year: 1850, lat: 41.5667, lon: -82.9000, lake: "Erie", casualties: 38, cause: "Fire", depth: "shallow", cargo: "general freight" },
    { name: "Morning Star", year: 1868, lat: 42.1000, lon: -80.6000, lake: "Erie", casualties: 30, cause: "Collision", depth: "40 ft", cargo: "iron ore" },
    { name: "Margaret Olwill", year: 1899, lat: 42.6000, lon: -79.3500, lake: "Erie", casualties: 16, cause: "Collision", depth: "45 ft", cargo: "grain" },
    { name: "Cleveco", year: 1942, lat: 42.3000, lon: -80.3000, lake: "Erie", casualties: 0, cause: "Storm", depth: "50 ft", cargo: "coal" },
    { name: "Admiral", year: 1942, lat: 42.5333, lon: -79.6500, lake: "Erie", casualties: 0, cause: "Storm", depth: "55 ft", cargo: "iron ore" },
    { name: "Phillip Minch", year: 1904, lat: 41.6333, lon: -82.5333, lake: "Erie", casualties: 7, cause: "Collision", depth: "40 ft", cargo: "iron ore" },
    { name: "Dean Richmond", year: 1893, lat: 42.6667, lon: -79.1667, lake: "Erie", casualties: 18, cause: "Storm", depth: "unknown", cargo: "general freight" },

    // Lake Ontario wrecks
    { name: "Bay State", year: 1862, lat: 43.4667, lon: -77.1667, lake: "Ontario", casualties: 0, cause: "Grounded", depth: "shallow", cargo: "none" },
    { name: "Comet", year: 1861, lat: 43.9000, lon: -76.5000, lake: "Ontario", casualties: 15, cause: "Collision", depth: "shallow", cargo: "general freight" },
    { name: "Noronic", year: 1949, lat: 43.6417, lon: -79.3833, lake: "Ontario", casualties: 119, cause: "Fire", depth: "dockside", cargo: "passengers" },
    { name: "Edmund Fitzgerald", year: 1873, lat: 43.7500, lon: -77.0000, lake: "Ontario", casualties: 17, cause: "Collision", depth: "shallow", cargo: "coal" },
    { name: "Ontario", year: 1817, lat: 43.8500, lon: -76.7000, lake: "Ontario", casualties: 130, cause: "Storm", depth: "500 ft", cargo: "passengers" },
    { name: "Hamilton", year: 1813, lat: 43.5500, lon: -77.9000, lake: "Ontario", casualties: 53, cause: "Storm", depth: "unknown", cargo: "military supplies" },
    { name: "Scourge", year: 1813, lat: 43.2000, lon: -79.1833, lake: "Ontario", casualties: 55, cause: "Squall", depth: "290 ft", cargo: "military supplies" },
    { name: "Wolfe Islander II", year: 1985, lat: 44.1833, lon: -76.5333, lake: "Ontario", casualties: 0, cause: "Fire", depth: "shallow", cargo: "vehicles" },
    { name: "Keystorm", year: 1912, lat: 43.6833, lon: -76.9333, lake: "Ontario", casualties: 0, cause: "Grounded", depth: "shallow", cargo: "grain" },
    { name: "Aloha", year: 1917, lat: 44.0000, lon: -76.7000, lake: "Ontario", casualties: 0, cause: "Storm", depth: "30 ft", cargo: "coal" }
];
