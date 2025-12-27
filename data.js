// Great Lakes GeoJSON data with enhanced detailed shoreline
// Enhanced resolution for more accurate coastline representation
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
          // Western shore (Duluth to Thunder Bay)
          [-92.09, 46.78], [-92.05, 46.82], [-91.98, 46.88], [-91.90, 46.93],
          [-91.80, 46.96], [-91.70, 46.98], [-91.60, 46.98], [-91.50, 47.02],
          [-91.40, 47.06], [-91.28, 47.10], [-91.15, 47.12], [-91.02, 47.16],
          [-90.90, 47.20], [-90.82, 47.20], [-90.72, 47.24], [-90.60, 47.30],
          [-90.48, 47.38], [-90.35, 47.45], [-90.20, 47.53], [-90.05, 47.65],
          [-89.90, 47.75], [-89.70, 47.88], [-89.50, 48.01], [-89.35, 48.08],
          [-89.15, 48.14], [-88.95, 48.19], [-88.75, 48.22], [-88.60, 48.23],
          [-88.38, 48.24], [-88.20, 48.23], [-88.00, 48.20], [-87.80, 48.18],
          [-87.60, 48.15], [-87.48, 48.12], [-87.30, 48.06], [-87.10, 47.98],
          [-86.95, 47.92], [-86.82, 47.81], [-86.70, 47.75], [-86.55, 47.68],
          [-86.40, 47.62], [-86.22, 47.55], [-86.10, 47.48], [-85.98, 47.41],
          [-85.85, 47.36], [-85.70, 47.30], [-85.55, 47.24], [-85.40, 47.18],
          [-85.30, 47.14], [-85.24, 47.10], [-85.15, 47.05], [-85.00, 46.98],
          [-84.88, 46.91], [-84.78, 46.85], [-84.73, 46.81], [-84.68, 46.77],
          [-84.62, 46.72], [-84.58, 46.67], [-84.54, 46.62], [-84.50, 46.54],
          [-84.48, 46.48], [-84.45, 46.42], [-84.42, 46.40], [-84.40, 46.38],
          [-84.37, 46.36],
          // Southern shore (Sault Ste. Marie to Duluth via US shore)
          [-84.40, 46.32], [-84.45, 46.28], [-84.50, 46.26], [-84.52, 46.25],
          [-84.55, 46.24], [-84.60, 46.26], [-84.68, 46.30], [-84.75, 46.36],
          [-84.80, 46.42], [-84.88, 46.44], [-84.98, 46.46], [-85.05, 46.47],
          [-85.10, 46.49], [-85.18, 46.53], [-85.28, 46.58], [-85.40, 46.65],
          [-85.53, 46.73], [-85.65, 46.78], [-85.78, 46.84], [-85.90, 46.88],
          [-86.02, 46.92], [-86.15, 46.95], [-86.30, 46.95], [-86.42, 46.94],
          [-86.48, 46.93], [-86.52, 46.93], [-86.60, 46.91], [-86.70, 46.88],
          [-86.80, 46.85], [-86.88, 46.82], [-86.95, 46.78], [-87.02, 46.73],
          [-87.10, 46.68], [-87.18, 46.63], [-87.25, 46.58], [-87.30, 46.55],
          [-87.35, 46.53], [-87.42, 46.50], [-87.52, 46.48], [-87.62, 46.46],
          [-87.70, 46.44], [-87.78, 46.42], [-87.85, 46.44], [-87.92, 46.47],
          [-88.02, 46.50], [-88.12, 46.54], [-88.22, 46.57], [-88.35, 46.60],
          [-88.48, 46.64], [-88.55, 46.66], [-88.62, 46.68], [-88.72, 46.69],
          [-88.85, 46.70], [-88.95, 46.70], [-89.08, 46.70], [-89.20, 46.69],
          [-89.35, 46.68], [-89.50, 46.68], [-89.62, 46.67], [-89.75, 46.65],
          [-89.88, 46.62], [-90.00, 46.60], [-90.15, 46.58], [-90.30, 46.56],
          [-90.42, 46.57], [-90.55, 46.58], [-90.68, 46.60], [-90.80, 46.63],
          [-90.88, 46.65], [-90.97, 46.67], [-91.05, 46.68], [-91.15, 46.69],
          [-91.25, 46.70], [-91.32, 46.70], [-91.35, 46.71], [-91.42, 46.72],
          [-91.52, 46.73], [-91.62, 46.74], [-91.70, 46.75], [-91.78, 46.76],
          [-91.88, 46.76], [-91.98, 46.77], [-92.09, 46.78]
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
          // Northern shore
          [-87.03, 45.85], [-86.90, 45.83], [-86.75, 45.81], [-86.62, 45.80],
          [-86.49, 45.79], [-86.35, 45.78], [-86.20, 45.78], [-86.05, 45.78],
          [-85.89, 45.78], [-85.75, 45.82], [-85.60, 45.88], [-85.48, 45.92],
          [-85.41, 45.94], [-85.30, 45.96], [-85.18, 45.97], [-85.05, 45.97],
          [-84.92, 45.90], [-84.85, 45.83], [-84.79, 45.75], [-84.76, 45.65],
          [-84.74, 45.57], [-84.73, 45.49], [-84.75, 45.42], [-84.80, 45.35],
          [-84.88, 45.30], [-84.95, 45.27],
          // Eastern shore (Michigan)
          [-85.05, 45.20], [-85.18, 45.12], [-85.28, 45.08], [-85.39, 45.04],
          [-85.48, 44.95], [-85.54, 44.90], [-85.58, 44.85], [-85.65, 44.82],
          [-85.75, 44.80], [-85.85, 44.78], [-85.89, 44.77], [-85.98, 44.72],
          [-86.05, 44.68], [-86.10, 44.63], [-86.14, 44.60], [-86.18, 44.58],
          [-86.20, 44.52], [-86.22, 44.46], [-86.24, 44.43], [-86.26, 44.40],
          [-86.30, 44.32], [-86.34, 44.24], [-86.37, 44.20], [-86.39, 44.17],
          [-86.42, 44.08], [-86.44, 44.00], [-86.46, 43.96], [-86.47, 43.92],
          [-86.50, 43.82], [-86.52, 43.76], [-86.53, 43.72], [-86.54, 43.69],
          [-86.56, 43.58], [-86.57, 43.50], [-86.58, 43.46], [-86.58, 43.42],
          [-86.59, 43.30], [-86.59, 43.22], [-86.59, 43.18], [-86.59, 43.15],
          [-86.58, 43.02], [-86.57, 42.92], [-86.56, 42.87], [-86.55, 42.82],
          [-86.53, 42.72], [-86.52, 42.67], [-86.51, 42.62], [-86.51, 42.52],
          [-86.51, 42.45], [-86.51, 42.42], [-86.51, 42.38], [-86.52, 42.28],
          [-86.53, 42.18], [-86.54, 42.12], [-86.54, 42.08], [-86.58, 42.00],
          [-86.65, 41.90], [-86.70, 41.83], [-86.74, 41.80], [-86.78, 41.77],
          [-86.85, 41.73], [-86.92, 41.70], [-86.98, 41.68], [-87.04, 41.67],
          // Southern shore (Illinois/Indiana)
          [-87.12, 41.65], [-87.20, 41.63], [-87.25, 41.62], [-87.30, 41.61],
          [-87.38, 41.64], [-87.45, 41.70], [-87.50, 41.75], [-87.53, 41.79],
          [-87.58, 41.88], [-87.62, 41.96], [-87.65, 42.00], [-87.68, 42.05],
          [-87.70, 42.15], [-87.73, 42.24], [-87.75, 42.28], [-87.76, 42.32],
          [-87.78, 42.42], [-87.79, 42.49], [-87.79, 42.52], [-87.79, 42.56],
          [-87.78, 42.68], [-87.76, 42.76], [-87.76, 42.79], [-87.75, 42.83],
          [-87.74, 42.95], [-87.73, 43.05], [-87.73, 43.10], [-87.73, 43.15],
          [-87.74, 43.28], [-87.74, 43.37], [-87.74, 43.42], [-87.74, 43.46],
          [-87.76, 43.60], [-87.77, 43.72], [-87.78, 43.78], [-87.79, 43.84],
          [-87.80, 43.98], [-87.80, 44.09], [-87.80, 44.14], [-87.80, 44.18],
          [-87.79, 44.32], [-87.78, 44.42], [-87.78, 44.47], [-87.77, 44.51],
          [-87.74, 44.62], [-87.71, 44.72], [-87.69, 44.80], [-87.67, 44.87],
          // Western shore (Wisconsin)
          [-87.62, 44.98], [-87.59, 45.08], [-87.57, 45.13], [-87.55, 45.18],
          [-87.50, 45.28], [-87.46, 45.35], [-87.43, 45.39], [-87.40, 45.42],
          [-87.33, 45.50], [-87.28, 45.57], [-87.25, 45.60], [-87.22, 45.63],
          [-87.15, 45.70], [-87.10, 45.77], [-87.06, 45.81], [-87.03, 45.85]
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
          // Northern connection to Superior
          [-84.73, 46.81], [-84.65, 46.72], [-84.58, 46.63], [-84.52, 46.58],
          [-84.50, 46.54], [-84.45, 46.48], [-84.42, 46.42], [-84.40, 46.38],
          [-84.37, 46.36], [-84.25, 46.28], [-84.10, 46.20], [-83.95, 46.16],
          [-83.85, 46.12], [-83.72, 46.10], [-83.60, 46.09], [-83.54, 46.09],
          [-83.49, 46.09], [-83.46, 46.04], [-83.44, 46.00], [-83.42, 45.97],
          [-83.46, 45.92], [-83.50, 45.87], [-83.54, 45.84], [-83.56, 45.82],
          [-83.65, 45.78], [-83.74, 45.76], [-83.78, 45.75], [-83.82, 45.74],
          [-83.92, 45.70], [-84.00, 45.68], [-84.05, 45.66], [-84.09, 45.65],
          [-84.15, 45.58], [-84.18, 45.53], [-84.19, 45.50], [-84.20, 45.48],
          [-84.18, 45.40], [-84.14, 45.34], [-84.12, 45.31], [-84.09, 45.28],
          [-84.00, 45.22], [-83.93, 45.18], [-83.89, 45.16], [-83.86, 45.14],
          [-83.78, 45.10], [-83.70, 45.08], [-83.66, 45.07], [-83.62, 45.06],
          [-83.55, 45.02], [-83.50, 45.00], [-83.48, 44.99], [-83.46, 44.98],
          [-83.40, 44.94], [-83.37, 44.91], [-83.35, 44.89], [-83.34, 44.87],
          [-83.30, 44.82], [-83.26, 44.78], [-83.24, 44.76], [-83.22, 44.75],
          [-83.16, 44.68], [-83.11, 44.63], [-83.08, 44.61], [-83.05, 44.59],
          [-82.98, 44.52], [-82.95, 44.48], [-82.93, 44.46], [-82.92, 44.45],
          [-82.85, 44.36], [-82.79, 44.29], [-82.76, 44.25], [-82.73, 44.22],
          [-82.68, 44.14], [-82.64, 44.09], [-82.62, 44.06], [-82.60, 44.04],
          [-82.57, 43.96], [-82.55, 43.90], [-82.54, 43.87], [-82.53, 43.84],
          [-82.49, 43.74], [-82.46, 43.68], [-82.44, 43.65], [-82.42, 43.62],
          [-82.38, 43.55], [-82.34, 43.50], [-82.32, 43.47], [-82.30, 43.45],
          [-82.26, 43.38], [-82.22, 43.32], [-82.20, 43.29], [-82.18, 43.27],
          [-82.12, 43.22], [-82.07, 43.19], [-82.04, 43.17], [-82.01, 43.16],
          [-81.92, 43.13], [-81.86, 43.11], [-81.82, 43.09], [-81.79, 43.08],
          [-81.68, 43.06], [-81.58, 43.05], [-81.53, 43.04], [-81.49, 43.04],
          [-81.38, 43.01], [-81.32, 42.98], [-81.29, 42.97], [-81.26, 42.95],
          [-81.20, 42.91], [-81.16, 42.88], [-81.14, 42.87], [-81.13, 42.86],
          [-81.08, 42.81], [-81.05, 42.78], [-81.03, 42.76], [-81.01, 42.75],
          // Western shore
          [-81.05, 42.77], [-81.12, 42.78], [-81.20, 42.78], [-81.25, 42.78],
          [-81.29, 42.78], [-81.40, 42.82], [-81.50, 42.86], [-81.58, 42.88],
          [-81.67, 42.91], [-81.80, 42.97], [-81.92, 43.02], [-81.98, 43.05],
          [-82.05, 43.08], [-82.15, 43.15], [-82.23, 43.20], [-82.27, 43.23],
          [-82.31, 43.26], [-82.38, 43.35], [-82.45, 43.42], [-82.49, 43.46],
          [-82.52, 43.50], [-82.58, 43.59], [-82.65, 43.67], [-82.69, 43.71],
          [-82.72, 43.75], [-82.77, 43.85], [-82.82, 43.94], [-82.84, 43.99],
          [-82.86, 44.02], [-82.92, 44.10], [-82.98, 44.16], [-83.00, 44.19],
          [-83.03, 44.22], [-83.09, 44.29], [-83.16, 44.35], [-83.19, 44.38],
          [-83.22, 44.41], [-83.28, 44.49], [-83.36, 44.56], [-83.39, 44.59],
          [-83.43, 44.62], [-83.50, 44.68], [-83.58, 44.73], [-83.62, 44.76],
          [-83.65, 44.78], [-83.73, 44.85], [-83.81, 44.90], [-83.85, 44.93],
          [-83.89, 44.96], [-83.96, 45.03], [-84.04, 45.09], [-84.07, 45.12],
          [-84.11, 45.15], [-84.18, 45.24], [-84.24, 45.31], [-84.27, 45.34],
          [-84.29, 45.38], [-84.34, 45.47], [-84.38, 45.54], [-84.40, 45.57],
          [-84.42, 45.60], [-84.46, 45.69], [-84.51, 45.76], [-84.53, 45.79],
          [-84.55, 45.82], [-84.60, 45.92], [-84.65, 46.00], [-84.67, 46.04],
          [-84.70, 46.08], [-84.73, 46.17], [-84.76, 46.23], [-84.77, 46.26],
          [-84.79, 46.29], [-84.80, 46.38], [-84.80, 46.44], [-84.80, 46.47],
          [-84.80, 46.50], [-84.78, 46.60], [-84.76, 46.70], [-84.75, 46.76],
          [-84.73, 46.81]
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
          // Northern/Western shore
          [-83.15, 41.99], [-83.08, 41.90], [-83.00, 41.80], [-82.95, 41.76],
          [-82.89, 41.72], [-82.84, 41.68], [-82.80, 41.65], [-82.78, 41.63],
          [-82.75, 41.61], [-82.68, 41.59], [-82.60, 41.57], [-82.55, 41.56],
          [-82.50, 41.55], [-82.38, 41.56], [-82.28, 41.58], [-82.24, 41.59],
          [-82.20, 41.50], [-82.08, 41.54], [-81.98, 41.58], [-81.92, 41.60],
          [-81.85, 41.61], [-81.75, 41.65], [-81.63, 41.69], [-81.57, 41.71],
          [-81.51, 41.73], [-81.40, 41.77], [-81.28, 41.81], [-81.22, 41.82],
          [-81.17, 41.84], [-81.05, 41.89], [-80.92, 41.93], [-80.85, 41.95],
          [-80.78, 41.96], [-80.65, 42.00], [-80.51, 42.04], [-80.44, 42.06],
          [-80.37, 42.08], [-80.25, 42.11], [-80.15, 42.14], [-80.10, 42.15],
          [-80.05, 42.16], [-79.95, 42.20], [-79.85, 42.23], [-79.80, 42.25],
          [-79.76, 42.27], [-79.60, 42.38], [-79.42, 42.52], [-79.28, 42.64],
          [-79.15, 42.72], [-79.10, 42.75], [-79.05, 42.78], [-78.99, 42.81],
          [-78.95, 42.83], [-78.93, 42.84], [-78.91, 42.85],
          // Eastern shore
          [-78.90, 42.88], [-78.89, 42.91], [-78.89, 42.93], [-78.89, 42.95],
          [-78.90, 42.98], [-78.92, 43.00], [-78.93, 43.02], [-78.95, 43.03],
          [-78.98, 43.06], [-79.01, 43.08], [-79.02, 43.10], [-79.04, 43.11],
          [-79.11, 43.14], [-79.18, 43.16], [-79.21, 43.18], [-79.25, 43.19],
          [-79.35, 43.21], [-79.45, 43.23], [-79.50, 43.23], [-79.56, 43.25],
          [-79.68, 43.25], [-79.78, 43.25], [-79.83, 43.24], [-79.88, 43.24],
          [-80.02, 43.20], [-80.12, 43.18], [-80.16, 43.17], [-80.20, 43.17],
          [-80.30, 43.13], [-80.38, 43.10], [-80.42, 43.09], [-80.47, 43.07],
          [-80.55, 43.03], [-80.63, 43.00], [-80.67, 42.98], [-80.71, 42.96],
          [-80.82, 42.91], [-80.91, 42.88], [-80.96, 42.86], [-81.01, 42.85],
          [-81.10, 42.82], [-81.18, 42.80], [-81.22, 42.79], [-81.25, 42.78],
          [-81.35, 42.75], [-81.44, 42.73], [-81.49, 42.72], [-81.54, 42.72],
          [-81.65, 42.70], [-81.74, 42.69], [-81.79, 42.69], [-81.84, 42.68],
          [-81.96, 42.66], [-82.07, 42.65], [-82.12, 42.65], [-82.18, 42.65],
          [-82.30, 42.64], [-82.40, 42.63], [-82.45, 42.63], [-82.51, 42.63],
          [-82.62, 42.65], [-82.72, 42.67], [-82.77, 42.68], [-82.83, 42.69],
          [-82.88, 42.73], [-82.92, 42.76], [-82.94, 42.78], [-82.96, 42.80],
          [-83.00, 42.85], [-83.04, 42.89], [-83.06, 42.91], [-83.08, 42.93],
          [-83.11, 43.00], [-83.13, 43.04], [-83.13, 43.07], [-83.13, 43.09],
          [-83.16, 43.15], [-83.18, 43.19], [-83.19, 43.21], [-83.20, 43.23],
          [-83.18, 43.20], [-83.16, 43.16], [-83.14, 43.13], [-83.12, 43.10],
          [-83.11, 43.02], [-83.10, 42.97], [-83.10, 42.95], [-83.10, 42.93],
          [-83.11, 42.85], [-83.12, 42.82], [-83.13, 42.80], [-83.14, 42.78],
          [-83.16, 42.68], [-83.17, 42.62], [-83.18, 42.59], [-83.18, 42.62],
          [-83.19, 42.52], [-83.19, 42.48], [-83.19, 42.47], [-83.20, 42.45],
          [-83.20, 42.38], [-83.19, 42.33], [-83.19, 42.30], [-83.19, 42.28],
          [-83.18, 42.20], [-83.17, 42.14], [-83.16, 42.11], [-83.15, 42.09],
          [-83.15, 42.04], [-83.15, 42.01], [-83.15, 42.00], [-83.15, 41.99]
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
          // Connection to Erie
          [-79.88, 43.24], [-79.78, 43.25], [-79.68, 43.25], [-79.62, 43.25],
          [-79.56, 43.25], [-79.45, 43.23], [-79.35, 43.21], [-79.30, 43.20],
          [-79.25, 43.19], [-79.18, 43.16], [-79.11, 43.14], [-79.07, 43.12],
          [-79.04, 43.11], [-78.99, 43.07], [-78.97, 43.05], [-78.96, 43.04],
          [-78.95, 43.03], [-78.93, 43.00], [-78.92, 42.98], [-78.91, 42.96],
          [-78.91, 42.95], [-78.90, 42.92], [-78.90, 42.90], [-78.89, 42.88],
          [-78.89, 42.85],
          // Southern shore
          [-78.82, 42.88], [-78.73, 42.91], [-78.65, 42.93], [-78.61, 42.94],
          [-78.57, 42.95], [-78.48, 42.98], [-78.36, 43.02], [-78.30, 43.04],
          [-78.23, 43.06], [-78.10, 43.11], [-77.95, 43.15], [-77.88, 43.17],
          [-77.82, 43.20], [-77.68, 43.26], [-77.55, 43.30], [-77.48, 43.33],
          [-77.42, 43.35], [-77.28, 43.42], [-77.12, 43.48], [-77.04, 43.51],
          [-76.96, 43.54], [-76.82, 43.61], [-76.67, 43.67], [-76.59, 43.70],
          [-76.51, 43.73], [-76.45, 43.78], [-76.40, 43.83], [-76.37, 43.85],
          [-76.35, 43.88], [-76.33, 43.94], [-76.31, 43.99], [-76.30, 44.01],
          [-76.30, 44.04], [-76.32, 44.09], [-76.34, 44.13], [-76.35, 44.15],
          [-76.37, 44.17], [-76.42, 44.21], [-76.47, 44.24], [-76.49, 44.26],
          [-76.52, 44.27], [-76.59, 44.29], [-76.66, 44.31], [-76.69, 44.32],
          [-76.73, 44.33], [-76.83, 44.34], [-76.92, 44.35], [-76.97, 44.35],
          [-77.02, 44.36], [-77.14, 44.36], [-77.25, 44.36], [-77.30, 44.36],
          [-77.35, 44.36], [-77.48, 44.35], [-77.59, 44.34], [-77.64, 44.33],
          [-77.70, 44.32], [-77.83, 44.29], [-77.94, 44.26], [-78.00, 44.25],
          [-78.06, 44.24], [-78.18, 44.20], [-78.30, 44.17], [-78.36, 44.15],
          [-78.42, 44.14], [-78.53, 44.10], [-78.64, 44.06], [-78.69, 44.04],
          [-78.75, 44.03], [-78.86, 43.98], [-78.97, 43.94], [-79.03, 43.92],
          [-79.09, 43.90], [-79.21, 43.84], [-79.30, 43.80], [-79.35, 43.78],
          [-79.40, 43.75], [-79.49, 43.69], [-79.58, 43.64], [-79.62, 43.62],
          [-79.67, 43.59], [-79.72, 43.54], [-79.77, 43.48], [-79.80, 43.46],
          [-79.82, 43.43], [-79.84, 43.38], [-79.86, 43.33], [-79.87, 43.31],
          [-79.88, 43.30], [-79.88, 43.27], [-79.88, 43.26], [-79.88, 43.25],
          [-79.88, 43.24]
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
    { name: "Toronto", lat: 43.6532, lon: -79.3832, lake: "Ontario" },
    { name: "Hamilton", lat: 43.2557, lon: -79.8711, lake: "Ontario" },
    { name: "Rochester", lat: 43.1566, lon: -77.6088, lake: "Ontario" },
    { name: "Kingston", lat: 44.2312, lon: -76.4860, lake: "Ontario" },
    { name: "Oswego", lat: 43.4556, lon: -76.5105, lake: "Ontario" }
];

// Historical Great Lakes Voyages (1818-1950)
// Sources: Milwaukee Public Library Great Lakes Marine Collection, UW-Madison Great Lakes Maritime History Project,
// BGSU Historical Collections of the Great Lakes, National Museum of the Great Lakes
const voyages = [
    // French Exploration Era (1679-1760)
    { id: 1, year: 1679, vessel: "Le Griffon", from: "Buffalo", to: "Green Bay", type: "exploration", cargo: "furs (12,000 lbs)", captain: "René-Robert Cavelier de La Salle", tonnage: 45, distance: 900, duration: "unknown", source: "https://en.wikipedia.org/wiki/Le_Griffon" },
    { id: 2, year: 1720, vessel: "Frontenac", from: "Fort Frontenac", to: "Detroit", type: "fur trade", cargo: "trade goods", captain: "Louis de la Porte", tonnage: 30, distance: 400, duration: "14 days", source: "https://www.maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c007" },
    { id: 3, year: 1735, vessel: "Marie-Thérèse", from: "Detroit", to: "Mackinac Island", type: "supply", cargo: "provisions", captain: "Pierre Marin", tonnage: 35, distance: 280, duration: "10 days", source: "https://www.maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c007" },
    { id: 4, year: 1755, vessel: "Louise", from: "Buffalo", to: "Detroit", type: "military", cargo: "soldiers & supplies", captain: "François-Marie Le Marchand", tonnage: 40, distance: 260, duration: "8 days", source: "https://www.maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c007" },

    // French Voyageur Canoe Brigades (1700-1760)
    { id: 5, year: 1720, vessel: "Canot de Maître Brigade", from: "Montreal", to: "Grand Portage", type: "fur trade", cargo: "trade goods & furs (3-4 tons)", captain: "Voyageur brigade", tonnage: 4, distance: 1200, duration: "45 days", source: "https://en.wikipedia.org/wiki/Voyageurs" },
    { id: 6, year: 1730, vessel: "Montreal Canoe", from: "Montreal", to: "Mackinac Island", type: "fur trade", cargo: "furs & supplies", captain: "Jacques Beaumont", tonnage: 3, distance: 800, duration: "30 days", source: "https://www.nps.gov/articles/000/economy-adventure-life-of-a-voyageur.htm" },
    { id: 7, year: 1745, vessel: "Canoe Brigade", from: "Detroit", to: "Grand Portage", type: "fur trade", cargo: "beaver pelts", captain: "Pierre Gaultier", tonnage: 4, distance: 700, duration: "25 days", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeresources/useofwaterroutes.html" },

    // British Colonial Vessels (1755-1800)
    { id: 8, year: 1755, vessel: "Ontario (brig)", from: "Oswego", to: "Fort Niagara", type: "military", cargo: "troops & supplies", captain: "British Navy", tonnage: 120, distance: 80, duration: "2 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 9, year: 1755, vessel: "Oswego (sloop)", from: "Oswego", to: "Detroit", type: "military", cargo: "ammunition", captain: "Lt. John Bradstreet", tonnage: 85, distance: 400, duration: "7 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 10, year: 1759, vessel: "Mohawk (snow)", from: "Fort Niagara", to: "Detroit", type: "military", cargo: "16 guns & supplies", captain: "British Navy", tonnage: 150, distance: 260, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 11, year: 1760, vessel: "Onondaga (sloop)", from: "Oswego", to: "Detroit", type: "supply", cargo: "provisions", captain: "British Navy", tonnage: 95, distance: 400, duration: "6 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 12, year: 1760, vessel: "Mississaga (sloop)", from: "Oswego", to: "Fort Niagara", type: "patrol", cargo: "naval stores", captain: "British Navy", tonnage: 90, distance: 80, duration: "2 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 13, year: 1760, vessel: "Williamson (ex-Outaouaise)", from: "Detroit", to: "Fort Niagara", type: "transport", cargo: "captured French supplies", captain: "British Navy", tonnage: 110, distance: 260, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 14, year: 1765, vessel: "Brunswick (schooner)", from: "Oswego", to: "Detroit", type: "transport", cargo: "merchandise", captain: "British Navy", tonnage: 100, distance: 400, duration: "6 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },

    // War of 1812 Naval Vessels (1812-1815)
    { id: 15, year: 1813, vessel: "USS Lawrence", from: "Erie", to: "Put-in-Bay", type: "warship", cargo: "18 32-pound carronades", captain: "Oliver Hazard Perry", tonnage: 480, distance: 45, duration: "1 day", source: "https://en.wikipedia.org/wiki/Battle_of_Lake_Erie" },
    { id: 16, year: 1813, vessel: "USS Niagara", from: "Erie", to: "Put-in-Bay", type: "warship", cargo: "18 32-pound carronades", captain: "Jesse Elliott", tonnage: 480, distance: 45, duration: "1 day", source: "https://ss.sites.mtu.edu/mhugl/2015/10/12/uss-lawrence-and-niagara/" },
    { id: 17, year: 1813, vessel: "HMS Detroit", from: "Detroit", to: "Put-in-Bay", type: "warship", cargo: "24-pound guns", captain: "Robert Barclay", tonnage: 490, distance: 90, duration: "2 days", source: "https://en.wikipedia.org/wiki/HMS_Detroit_(1813)" },
    { id: 18, year: 1813, vessel: "HMS Queen Charlotte", from: "Detroit", to: "Put-in-Bay", type: "warship", cargo: "naval artillery", captain: "Robert Finnis", tonnage: 400, distance: 90, duration: "2 days", source: "https://en.wikipedia.org/wiki/Battle_of_Lake_Erie" },

    // Early American Period (1800-1817)
    { id: 19, year: 1805, vessel: "Adams (schooner)", from: "Detroit", to: "Buffalo", type: "trade", cargo: "pelts & provisions", captain: "Samuel Adams", tonnage: 75, distance: 260, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 20, year: 1810, vessel: "Mary (sloop)", from: "Buffalo", to: "Cleveland", type: "freight", cargo: "general merchandise", captain: "John Cleveland", tonnage: 60, distance: 170, duration: "3 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 21, year: 1816, vessel: "Frontenac (Canadian steamer)", from: "Kingston", to: "York", type: "passenger", cargo: "passengers & mail", captain: "James McKenzie", tonnage: 350, distance: 170, duration: "12 hours", source: "https://navalmarinearchive.com/research/docs/frontenac_steamer.html" },

    // Early Steam Era (1818-1850)
    { id: 5, year: 1818, vessel: "Walk-in-the-Water", from: "Buffalo", to: "Detroit", type: "passenger", cargo: "passengers", captain: "Job Fish", tonnage: 338, distance: 260, duration: "44 hours", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 2, year: 1843, vessel: "Hercules", from: "Buffalo", to: "Chicago", type: "freight", cargo: "package freight", captain: "E.M. Peck", tonnage: 485, distance: 850, duration: "5 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 3, year: 1845, vessel: "Independence", from: "Buffalo", to: "Chicago", type: "passenger", cargo: "passengers", captain: "J.B. Wilson", tonnage: 712, distance: 850, duration: "4 days", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 4, year: 1847, vessel: "Phoenix", from: "Buffalo", to: "Milwaukee", type: "passenger", cargo: "passengers & mail", captain: "G.B. Sweet", tonnage: 630, distance: 720, duration: "3 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 5, year: 1850, vessel: "Southerner", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "Arthur Edwards", tonnage: 420, distance: 90, duration: "overnight", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 6, year: 1850, vessel: "Baltimore", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "D.L. Parsons", tonnage: 395, distance: 90, duration: "overnight", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 7, year: 1850, vessel: "Western World", from: "Detroit", to: "Chicago", type: "passenger", cargo: "passengers", captain: "R.C. Bristol", tonnage: 890, distance: 320, duration: "2 days", source: "https://greatlakes.bgsu.edu/" },

    // Mid-Century Expansion (1851-1875)
    { id: 8, year: 1852, vessel: "Plymouth Rock", from: "Buffalo", to: "Detroit", type: "freight", cargo: "manufactured goods", captain: "S.M. Ward", tonnage: 450, distance: 260, duration: "1 day", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 9, year: 1855, vessel: "Atlantic", from: "Chicago", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "J.H. Pomeroy", tonnage: 1100, distance: 850, duration: "4 days", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 10, year: 1858, vessel: "Northern Light", from: "Milwaukee", to: "Buffalo", type: "freight", cargo: "wheat", captain: "T.S. Grayson", tonnage: 980, distance: 720, duration: "5 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 11, year: 1860, vessel: "Morning Star", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "W.H. Ward", tonnage: 1200, distance: 650, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 12, year: 1862, vessel: "City of Chicago", from: "Chicago", to: "Buffalo", type: "passenger", cargo: "passengers & freight", captain: "E.B. Ward", tonnage: 1450, distance: 850, duration: "4 days", source: "https://nmgl.org/" },
    { id: 13, year: 1865, vessel: "Lac La Belle", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "N.S. Fairbanks", tonnage: 520, distance: 90, duration: "8 hours", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 14, year: 1869, vessel: "R.J. Hackett", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "R.J. Hackett", tonnage: 1600, distance: 950, duration: "7 days", source: "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/great-lakes-steamships" },
    { id: 15, year: 1870, vessel: "City of Buffalo", from: "Buffalo", to: "Chicago", type: "passenger", cargo: "passengers", captain: "J.C. Evans", tonnage: 1320, distance: 850, duration: "3.5 days", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 16, year: 1872, vessel: "Michigan", from: "Detroit", to: "Milwaukee", type: "freight", cargo: "machinery", captain: "H.C. Richmond", tonnage: 875, distance: 280, duration: "2 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 17, year: 1875, vessel: "Empire State", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers & mail", captain: "T.W. Palmer", tonnage: 1580, distance: 950, duration: "5 days", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },

    // Golden Age (1876-1900)
    { id: 18, year: 1878, vessel: "City of Detroit", from: "Detroit", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "W.H. Ashley", tonnage: 1425, distance: 260, duration: "14 hours", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 19, year: 1880, vessel: "North Star", from: "Cleveland", to: "Chicago", type: "freight", cargo: "coal", captain: "J.T. Parsons", tonnage: 1850, distance: 310, duration: "3 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 20, year: 1882, vessel: "City of Cleveland", from: "Cleveland", to: "Detroit", type: "passenger", cargo: "passengers", captain: "R.N. Rice", tonnage: 1240, distance: 90, duration: "6 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 21, year: 1885, vessel: "Majestic", from: "Buffalo", to: "Chicago", type: "passenger", cargo: "passengers & freight", captain: "J.W. Westcott", tonnage: 1950, distance: 850, duration: "3 days", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 22, year: 1888, vessel: "North West", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers", captain: "A.E. Goodrich", tonnage: 3450, distance: 950, duration: "4 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 23, year: 1890, vessel: "Christopher Columbus", from: "Chicago", to: "Milwaukee", type: "passenger", cargo: "passengers", captain: "J.H. Johnson", tonnage: 1520, distance: 80, duration: "4 hours", source: "https://nmgl.org/" },
    { id: 24, year: 1892, vessel: "City of Mackinac", from: "Detroit", to: "Mackinaw City", type: "passenger", cargo: "passengers", captain: "D.P. Dobbins", tonnage: 1280, distance: 280, duration: "18 hours", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 25, year: 1894, vessel: "North Land", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers", captain: "J.J. Hill", tonnage: 3650, distance: 950, duration: "3.5 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 26, year: 1896, vessel: "Tashmoo", from: "Detroit", to: "Port Huron", type: "passenger", cargo: "passengers", captain: "J.W. Parker", tonnage: 1125, distance: 60, duration: "3 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 27, year: 1898, vessel: "Manitou", from: "Chicago", to: "Harbor Springs", type: "passenger", cargo: "passengers", captain: "S.P. Burton", tonnage: 1650, distance: 280, duration: "24 hours", source: "https://thumbwind.com/2019/11/22/great-lakes-cruising/" },
    { id: 28, year: 1900, vessel: "City of Erie", from: "Buffalo", to: "Erie", type: "passenger", cargo: "passengers", captain: "F.W. Peacock", tonnage: 920, distance: 85, duration: "5 hours", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },

    // Early 20th Century (1901-1920)
    { id: 29, year: 1902, vessel: "Western States", from: "Buffalo", to: "Chicago", type: "freight", cargo: "steel", captain: "H.B. Smith", tonnage: 3200, distance: 850, duration: "4 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 30, year: 1904, vessel: "City of Toledo", from: "Detroit", to: "Toledo", type: "passenger", cargo: "passengers", captain: "W.S. Mack", tonnage: 1050, distance: 50, duration: "4 hours", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 31, year: 1906, vessel: "City of St. Ignace", from: "Detroit", to: "Mackinaw City", type: "passenger", cargo: "passengers & mail", captain: "J.T. Brown", tonnage: 1380, distance: 280, duration: "16 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 32, year: 1908, vessel: "Theodore Roosevelt", from: "Buffalo", to: "Duluth", type: "bulk", cargo: "iron ore", captain: "A.E. Stewart", tonnage: 4200, distance: 950, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 33, year: 1910, vessel: "Seeandbee", from: "Cleveland", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "C.B. McVay", tonnage: 6400, distance: 185, duration: "9 hours", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 34, year: 1912, vessel: "Greater Detroit", from: "Detroit", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "F.A. Johnson", tonnage: 7700, distance: 260, duration: "10 hours", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 35, year: 1913, vessel: "Greater Buffalo", from: "Buffalo", to: "Detroit", type: "passenger", cargo: "passengers", captain: "R.D. Crawford", tonnage: 7700, distance: 260, duration: "10 hours", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 36, year: 1914, vessel: "South American", from: "Chicago", to: "Duluth", type: "passenger", cargo: "passengers", captain: "W.J. Johnston", tonnage: 5150, distance: 420, duration: "2 days", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },
    { id: 37, year: 1915, vessel: "North American", from: "Chicago", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "H.R. Morrison", tonnage: 5100, distance: 280, duration: "36 hours", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },
    { id: 38, year: 1916, vessel: "Put-in-Bay", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "F.H. Prince", tonnage: 980, distance: 90, duration: "overnight", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 39, year: 1918, vessel: "City of Detroit III", from: "Detroit", to: "Buffalo", type: "passenger", cargo: "passengers & freight", captain: "W.C. Richardson", tonnage: 5200, distance: 260, duration: "12 hours", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 40, year: 1920, vessel: "Eastern States", from: "Buffalo", to: "Chicago", type: "freight", cargo: "automobiles", captain: "G.W. Orr", tonnage: 5800, distance: 850, duration: "4 days", source: "https://greatlakes.bgsu.edu/" },

    // Interwar Period (1921-1940)
    { id: 41, year: 1922, vessel: "City of Cleveland III", from: "Cleveland", to: "Detroit", type: "passenger", cargo: "passengers", captain: "E.D. McDougall", tonnage: 5300, distance: 90, duration: "overnight", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 42, year: 1924, vessel: "Alabama", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "J.R. Sterling", tonnage: 1850, distance: 90, duration: "overnight", source: "https://search.library.wisc.edu/digital/AGreatLakes" },
    { id: 43, year: 1926, vessel: "Milwaukee Clipper", from: "Milwaukee", to: "Muskegon", type: "passenger", cargo: "passengers & autos", captain: "T.M. Denise", tonnage: 4400, distance: 75, duration: "5 hours", source: "https://thumbwind.com/2019/11/22/great-lakes-cruising/" },
    { id: 44, year: 1928, vessel: "City of Buffalo III", from: "Buffalo", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "H.S. Pardee", tonnage: 4800, distance: 185, duration: "9 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 45, year: 1930, vessel: "Octorara", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "W.H. McAlpine", tonnage: 2200, distance: 90, duration: "overnight", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
    { id: 46, year: 1932, vessel: "Samuel Mather", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "E.J. Kennedy", tonnage: 9200, distance: 950, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 47, year: 1935, vessel: "City of Midland", from: "Chicago", to: "Milwaukee", type: "passenger", cargo: "passengers", captain: "C.E. Converse", tonnage: 1650, distance: 80, duration: "4 hours", source: "https://nmgl.org/" },
    { id: 48, year: 1937, vessel: "North American", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers", captain: "R.C. Schneider", tonnage: 5100, distance: 950, duration: "4 days", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },
    { id: 49, year: 1939, vessel: "South American", from: "Chicago", to: "Buffalo", type: "passenger", cargo: "passengers", captain: "A.M. Anderson", tonnage: 5150, distance: 850, duration: "3 days", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },
    { id: 50, year: 1940, vessel: "Aquarama", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers", captain: "F.M. Carter", tonnage: 3500, distance: 90, duration: "overnight", source: "https://thumbwind.com/2019/11/22/great-lakes-cruising/" },

    // Post-War Era (1941-1950)
    { id: 51, year: 1945, vessel: "Ashland", from: "Duluth", to: "Detroit", type: "bulk", cargo: "coal", captain: "H.W. Wilson", tonnage: 8500, distance: 650, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 52, year: 1947, vessel: "South American", from: "Chicago", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "W.R. Thompson", tonnage: 5150, distance: 280, duration: "36 hours", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },
    { id: 53, year: 1948, vessel: "City of Midland 41", from: "Milwaukee", to: "Chicago", type: "passenger", cargo: "passengers", captain: "J.C. Morrison", tonnage: 1800, distance: 80, duration: "4 hours", source: "https://nmgl.org/" },
    { id: 54, year: 1950, vessel: "North American", from: "Detroit", to: "Duluth", type: "passenger", cargo: "passengers", captain: "D.R. MacLeod", tonnage: 5100, distance: 650, duration: "3 days", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" },

    // Additional Schooners & Early Vessels (1835-1850)
    { id: 55, year: 1835, vessel: "Ocean", from: "Milwaukee", to: "Chicago", type: "schooner", cargo: "grain", captain: "J.D. Miller", tonnage: 95, distance: 80, duration: "8 hours", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 56, year: 1835, vessel: "Western Trader", from: "Milwaukee", to: "Detroit", type: "schooner", cargo: "lumber", captain: "T.H. Brown", tonnage: 110, distance: 350, duration: "3 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 57, year: 1837, vessel: "Solomon Juneau", from: "Milwaukee", to: "Buffalo", type: "schooner", cargo: "wheat", captain: "H.S. Allen", tonnage: 125, distance: 720, duration: "5 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 58, year: 1840, vessel: "Victor", from: "Chicago", to: "Buffalo", type: "schooner", cargo: "grain", captain: "W.P. Bates", tonnage: 135, distance: 850, duration: "6 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 59, year: 1840, vessel: "General Thornton", from: "Milwaukee", to: "Cleveland", type: "schooner", cargo: "wheat", captain: "J.R. Reed", tonnage: 140, distance: 400, duration: "4 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },
    { id: 60, year: 1847, vessel: "Eagle", from: "Chicago", to: "Buffalo", type: "schooner", cargo: "wheat (8000 bushels)", captain: "S.W. Pierce", tonnage: 185, distance: 850, duration: "5 days", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeheritage/GreatLakesCargos.html" },
    { id: 61, year: 1847, vessel: "Raleigh", from: "Milwaukee", to: "Buffalo", type: "schooner", cargo: "wheat (8000 bushels)", captain: "D.M. Taylor", tonnage: 190, distance: 720, duration: "5 days", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeheritage/GreatLakesCargos.html" },
    { id: 62, year: 1849, vessel: "Sarah A. Gurr", from: "Chicago", to: "Detroit", type: "schooner", cargo: "package freight", captain: "A.C. Gurr", tonnage: 155, distance: 320, duration: "2.5 days", source: "https://greatlakeships.org/results" },

    // Mid-Century Schooners (1850-1870)
    { id: 63, year: 1850, vessel: "L.C. Butts", from: "Cleveland", to: "Buffalo", type: "schooner", cargo: "coal", captain: "L.C. Butts", tonnage: 165, distance: 185, duration: "2 days", source: "https://greatlakeships.org/results" },
    { id: 64, year: 1852, vessel: "Bonnie Doon", from: "Milwaukee", to: "Detroit", type: "schooner", cargo: "grain", captain: "J.W. Chapman", tonnage: 210, distance: 350, duration: "56 hours", source: "https://linkstothepast.com/marine/chapt38.php" },
    { id: 65, year: 1854, vessel: "Northwest", from: "Chicago", to: "Buffalo", type: "bark", cargo: "wheat", captain: "H.M. Smith", tonnage: 425, distance: 850, duration: "4.5 days", source: "https://maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c014" },
    { id: 66, year: 1856, vessel: "Oneonta", from: "Chicago", to: "Buffalo", type: "bark", cargo: "corn", captain: "W.R. Jones", tonnage: 440, distance: 850, duration: "4.5 days", source: "https://maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c014" },
    { id: 67, year: 1858, vessel: "Ottawa", from: "Milwaukee", to: "Buffalo", type: "schooner", cargo: "lumber", captain: "F.P. Root", tonnage: 280, distance: 720, duration: "4 days", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeheritage/GreatLakesCargos.html" },
    { id: 68, year: 1861, vessel: "Arctic", from: "Chicago", to: "Milwaukee", type: "schooner", cargo: "lumber", captain: "G.H. Merritt", tonnage: 245, distance: 80, duration: "6 hours", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeheritage/GreatLakesCargos.html" },
    { id: 69, year: 1863, vessel: "David Dows", from: "Chicago", to: "Buffalo", type: "schooner", cargo: "wheat", captain: "W.H. Thompson", tonnage: 1420, distance: 850, duration: "5 days", source: "https://greatlakeships.org/" },
    { id: 70, year: 1867, vessel: "Lyman M. Davis", from: "Milwaukee", to: "Buffalo", type: "schooner", cargo: "grain", captain: "L.M. Davis", tonnage: 485, distance: 720, duration: "4.5 days", source: "https://greatlakeships.org/" },

    // Goodrich Line & Additional Passenger Steamers (1868-1910)
    { id: 71, year: 1868, vessel: "Sunbeam", from: "Chicago", to: "Milwaukee", type: "passenger", cargo: "passengers", captain: "A.E. Goodrich", tonnage: 280, distance: 80, duration: "3.5 hours", source: "https://en.wikipedia.org/wiki/Goodrich_Transportation_Company" },
    { id: 72, year: 1870, vessel: "Alpena", from: "Milwaukee", to: "Sheboygan", type: "passenger", cargo: "passengers & mail", captain: "N.S. Napier", tonnage: 365, distance: 50, duration: "2 hours", source: "https://www.wisconsinhistory.org/Records/Image/IM5790" },
    { id: 73, year: 1875, vessel: "Corona", from: "Chicago", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "J.L. Higgie", tonnage: 950, distance: 280, duration: "24 hours", source: "https://shepherdexpress.com/culture/milwaukee-history/steaming-great-lakes-forgotten-legacy-goodrich-line/" },
    { id: 74, year: 1883, vessel: "City of Ludington", from: "Milwaukee", to: "Ludington", type: "passenger", cargo: "passengers & freight", captain: "W.C. Morrison", tonnage: 1120, distance: 85, duration: "4 hours", source: "https://www.wisconsinhistory.org/Records/Image/IM5790" },
    { id: 75, year: 1887, vessel: "Virginia", from: "Chicago", to: "Milwaukee", type: "passenger", cargo: "passengers", captain: "J.H. Dancy", tonnage: 1680, distance: 80, duration: "3 hours", source: "https://shepherdexpress.com/culture/milwaukee-history/steaming-great-lakes-forgotten-legacy-goodrich-line/" },
    { id: 76, year: 1891, vessel: "Atlanta", from: "Milwaukee", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "R.W. England", tonnage: 1850, distance: 270, duration: "20 hours", source: "https://www.wisconsinhistory.org/Records/Image/IM5790" },
    { id: 77, year: 1895, vessel: "Carolina", from: "Chicago", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "H.W. Johnson", tonnage: 2200, distance: 280, duration: "4 day cruise", source: "https://shepherdexpress.com/culture/milwaukee-history/steaming-great-lakes-forgotten-legacy-goodrich-line/" },
    { id: 78, year: 1899, vessel: "Indiana", from: "Chicago", to: "Milwaukee", type: "passenger", cargo: "passengers", captain: "C.J. Trowell", tonnage: 1920, distance: 80, duration: "3.5 hours", source: "https://www.wisconsinhistory.org/Records/Image/IM5790" },
    { id: 79, year: 1905, vessel: "Alabama", from: "Milwaukee", to: "Chicago", type: "passenger", cargo: "passengers & freight", captain: "D.F. Morrison", tonnage: 1850, distance: 80, duration: "3 hours", source: "https://shepherdexpress.com/culture/milwaukee-history/steaming-great-lakes-forgotten-legacy-goodrich-line/" },
    { id: 80, year: 1909, vessel: "Alabama", from: "Chicago", to: "Racine", type: "passenger", cargo: "passengers", captain: "W.H. McAlpine", tonnage: 1850, distance: 65, duration: "2.5 hours", source: "https://www.wisconsinhistory.org/Records/Image/IM5790" },

    // Early Pioneers & Canal Era (1816-1844)
    { id: 81, year: 1817, vessel: "Frontenac", from: "Buffalo", to: "Detroit", type: "passenger", cargo: "passengers", captain: "J. McKenzie", tonnage: 240, distance: 260, duration: "3 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 82, year: 1817, vessel: "Ontario", from: "Buffalo", to: "Cleveland", type: "passenger", cargo: "passengers & mail", captain: "S. Howard", tonnage: 220, distance: 170, duration: "2 days", source: "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/great-lakes-steamships" },
    { id: 83, year: 1826, vessel: "Pioneer", from: "Buffalo", to: "Detroit", type: "passenger", cargo: "immigrants", captain: "E. Chapman", tonnage: 350, distance: 260, duration: "2 days", source: "https://www.maritimehistoryofthegreatlakes.ca/documents/hgl/default.asp?ID=c014" },
    { id: 84, year: 1844, vessel: "Empire", from: "Buffalo", to: "Chicago", type: "passenger", cargo: "immigrants & freight", captain: "T.J. Wilson", tonnage: 685, distance: 850, duration: "4 days", source: "https://nmgl.org/lake-michigan-shipping-1830-1850-summer-1949/" },

    // Propeller Steamships (1860-1880)
    { id: 85, year: 1863, vessel: "Wabash", from: "Detroit", to: "Chicago", type: "propeller", cargo: "passengers & freight", captain: "J.R. Monroe", tonnage: 780, distance: 320, duration: "2 days", source: "https://navalmarinearchive.com/research/docs/great_lakes_steam1.html" },
    { id: 86, year: 1865, vessel: "Pacific", from: "Buffalo", to: "Detroit", type: "propeller", cargo: "package freight", captain: "W.H. Thorn", tonnage: 820, distance: 260, duration: "1.5 days", source: "https://navalmarinearchive.com/research/docs/great_lakes_steam1.html" },
    { id: 87, year: 1871, vessel: "City of Fremont", from: "Chicago", to: "Milwaukee", type: "propeller", cargo: "passengers & freight", captain: "H.B. Tuttle", tonnage: 655, distance: 80, duration: "5 hours", source: "https://grokipedia.com/page/Great_Lakes_passenger_steamers" },
    { id: 88, year: 1877, vessel: "Japan", from: "Cleveland", to: "Buffalo", type: "propeller", cargo: "passengers", captain: "R.C. Pringle", tonnage: 980, distance: 185, duration: "10 hours", source: "https://linkstothepast.com/marine/index.php" },
    { id: 89, year: 1880, vessel: "City of Cleveland", from: "Cleveland", to: "Chicago", type: "propeller", cargo: "package freight", captain: "E.W. Smith", tonnage: 1150, distance: 310, duration: "2.5 days", source: "https://navalmarinearchive.com/research/docs/great_lakes_steam1.html" },

    // Iron & Steel Bulk Freighters Era (1882-1920)
    { id: 90, year: 1882, vessel: "Onoko", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "J.H. Brown", tonnage: 2164, distance: 850, duration: "5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 91, year: 1884, vessel: "Schooner", from: "Cleveland", to: "Chatham", type: "schooner", cargo: "coal", captain: "William Francis Light", tonnage: 195, distance: 190, duration: "2 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 92, year: 1890, vessel: "Western Reserve", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "Peter G. Minch", tonnage: 2392, distance: 850, duration: "5 days", source: "https://en.wikipedia.org/wiki/SS_Western_Reserve" },
    { id: 93, year: 1893, vessel: "Victory", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "A.W. Comstock", tonnage: 2950, distance: 950, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 94, year: 1901, vessel: "Frank Rockefeller", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "H.S. Johnson", tonnage: 4850, distance: 850, duration: "5 days", source: "https://wi101.wisc.edu/great-lakes-shipping/" },
    { id: 95, year: 1903, vessel: "Ferdinand Schlesinger", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "Brownell", tonnage: 5200, distance: 950, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 96, year: 1911, vessel: "Col. James M. Schoonmaker", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "J.M. Schoonmaker", tonnage: 8800, distance: 650, duration: "4.5 days", source: "https://en.wikipedia.org/wiki/Category:Great_Lakes_freighters" },
    { id: 97, year: 1917, vessel: "John G. Munson", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "coal", captain: "T.R. Wilson", tonnage: 7100, distance: 850, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },

    // Lumber Hookers & Timber Trade (1880-1920)
    { id: 98, year: 1881, vessel: "Our Son", from: "Manistee", to: "Chicago", type: "schooner", cargo: "lumber", captain: "H.P. Schuenemann", tonnage: 205, distance: 90, duration: "8 hours", source: "https://wisconsinshipwrecks.org/" },
    { id: 99, year: 1886, vessel: "Three Brothers", from: "Ludington", to: "Milwaukee", type: "schooner", cargo: "lumber", captain: "J.M. Doak", tonnage: 240, distance: 75, duration: "7 hours", source: "https://wisconsinshipwrecks.org/" },
    { id: 100, year: 1891, vessel: "J.E. Gilmore", from: "Manistee", to: "Chicago", type: "schooner", cargo: "lumber", captain: "W.C. Richardson", tonnage: 285, distance: 90, duration: "9 hours", source: "https://greatlakeships.org/" },
    { id: 101, year: 1895, vessel: "Mary E. Cook", from: "Frankfort", to: "Milwaukee", type: "schooner", cargo: "cedar posts", captain: "T.W. Nelson", tonnage: 195, distance: 65, duration: "6 hours", source: "https://wisconsinshipwrecks.org/" },
    { id: 102, year: 1898, vessel: "Moonlight", from: "Escanaba", to: "Chicago", type: "schooner", cargo: "lumber", captain: "D.J. Morrison", tonnage: 220, distance: 180, duration: "12 hours", source: "https://greatlakeships.org/" },
    { id: 103, year: 1912, vessel: "Rouse Simmons", from: "Manistique", to: "Chicago", type: "schooner", cargo: "Christmas trees", captain: "Herman Schuenemann", tonnage: 205, distance: 200, duration: "14 hours", source: "https://wisconsinshipwrecks.org/" },

    // Railroad Car Ferries (1892-1940)
    { id: 104, year: 1892, vessel: "Ann Arbor No. 1", from: "Frankfort", to: "Kewaunee", type: "car ferry", cargo: "railroad cars", captain: "J.C. Thompson", tonnage: 1485, distance: 60, duration: "4.5 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 105, year: 1896, vessel: "Ann Arbor No. 2", from: "Frankfort", to: "Manitowoc", type: "car ferry", cargo: "railroad cars", captain: "W.H. Gates", tonnage: 1650, distance: 65, duration: "5 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 106, year: 1902, vessel: "Pere Marquette 17", from: "Ludington", to: "Manitowoc", type: "car ferry", cargo: "railroad cars", captain: "R.D. MacDonald", tonnage: 2650, distance: 65, duration: "4 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 107, year: 1911, vessel: "Ann Arbor No. 4", from: "Frankfort", to: "Menominee", type: "car ferry", cargo: "railroad cars", captain: "C.E. Furlong", tonnage: 2850, distance: 85, duration: "6 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 108, year: 1914, vessel: "Pere Marquette 18", from: "Ludington", to: "Milwaukee", type: "car ferry", cargo: "railroad cars", captain: "J.H. Mohr", tonnage: 3200, distance: 80, duration: "5 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 109, year: 1911, vessel: "Chief Wawatam", from: "Mackinaw City", to: "St. Ignace", type: "car ferry", cargo: "railroad cars", captain: "A.E. Johnson", tonnage: 2994, distance: 5, duration: "30 minutes", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 110, year: 1924, vessel: "City of Milwaukee", from: "Milwaukee", to: "Grand Haven", type: "car ferry", cargo: "railroad cars", captain: "W.B. Stafford", tonnage: 4400, distance: 75, duration: "4.5 hours", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 111, year: 1929, vessel: "Ann Arbor No. 6", from: "Frankfort", to: "Kewaunee", type: "car ferry", cargo: "railroad cars", captain: "E.J. Sullivan", tonnage: 3800, distance: 60, duration: "4 hours", source: "https://www.greatlakesvesselhistory.com/" },

    // Northern Navigation & Ward Line Steamers (1885-1915)
    { id: 112, year: 1885, vessel: "Telegram", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers", captain: "J.W. Hall", tonnage: 1450, distance: 950, duration: "4.5 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 113, year: 1889, vessel: "City of Toronto", from: "Toronto", to: "Chicago", type: "passenger", cargo: "passengers & freight", captain: "H.J. McIntyre", tonnage: 1850, distance: 600, duration: "3 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 114, year: 1893, vessel: "Northwest", from: "Detroit", to: "Duluth", type: "passenger", cargo: "passengers", captain: "F.W. Perew", tonnage: 2800, distance: 650, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 115, year: 1897, vessel: "Northland", from: "Buffalo", to: "Duluth", type: "passenger", cargo: "passengers", captain: "R.J. McLeod", tonnage: 3200, distance: 950, duration: "4 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 116, year: 1901, vessel: "Huronic", from: "Detroit", to: "Mackinac Island", type: "passenger", cargo: "passengers", captain: "J.H. Cameron", tonnage: 3850, distance: 280, duration: "18 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 117, year: 1907, vessel: "Hamonic", from: "Detroit", to: "Port Arthur", type: "passenger", cargo: "passengers", captain: "W.E. Gregory", tonnage: 5500, distance: 750, duration: "3 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 118, year: 1913, vessel: "Noronic", from: "Detroit", to: "Duluth", type: "passenger", cargo: "passengers", captain: "D.F. Campbell", tonnage: 6095, distance: 650, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },

    // Whaleback Steamers (1888-1906)
    { id: 119, year: 1888, vessel: "101", from: "Duluth", to: "Buffalo", type: "whaleback", cargo: "iron ore", captain: "A.B. McDougall", tonnage: 1400, distance: 950, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 120, year: 1892, vessel: "Christopher Columbus", from: "Milwaukee", to: "Chicago", type: "whaleback", cargo: "passengers", captain: "A.C. Rounds", tonnage: 1511, distance: 80, duration: "4 hours", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 121, year: 1896, vessel: "Frank Rockefeller", from: "Duluth", to: "Cleveland", type: "whaleback", cargo: "iron ore", captain: "W.H. Singer", tonnage: 3400, distance: 850, duration: "5 days", source: "https://wi101.wisc.edu/great-lakes-shipping/" },
    { id: 122, year: 1898, vessel: "Thomas Wilson", from: "Duluth", to: "Buffalo", type: "whaleback", cargo: "grain", captain: "T. Wilson", tonnage: 3650, distance: 950, duration: "5.5 days", source: "https://www.greatlakesvesselhistory.com/" },

    // Canadian Package Freighters & Passenger Vessels (1880-1930)
    { id: 123, year: 1883, vessel: "Algoma", from: "Collingwood", to: "Sault Ste. Marie", type: "passenger", cargo: "passengers & freight", captain: "J. Moore", tonnage: 1450, distance: 200, duration: "18 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 124, year: 1887, vessel: "Athabasca", from: "Owen Sound", to: "Port Arthur", type: "passenger", cargo: "passengers & freight", captain: "R. Foote", tonnage: 1850, distance: 450, duration: "2 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 125, year: 1892, vessel: "Alberta", from: "Sarnia", to: "Duluth", type: "passenger", cargo: "passengers", captain: "W.J. Bassett", tonnage: 2100, distance: 600, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 126, year: 1897, vessel: "Assiniboia", from: "Toronto", to: "Duluth", type: "passenger", cargo: "passengers & mail", captain: "J.H. Foote", tonnage: 2550, distance: 750, duration: "3 days", source: "https://greatlakes.bgsu.edu/" },
    { id: 127, year: 1904, vessel: "Keewatin", from: "Port Arthur", to: "Sault Ste. Marie", type: "passenger", cargo: "passengers", captain: "W.G. Robertson", tonnage: 3856, distance: 350, duration: "24 hours", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 128, year: 1909, vessel: "Assiniboia", from: "Port McNicoll", to: "Fort William", type: "passenger", cargo: "passengers & freight", captain: "R.D. Foote", tonnage: 5400, distance: 500, duration: "2 days", source: "https://greatlakes.bgsu.edu/" },

    // Modern Bulk Carriers (1920-1950)
    { id: 129, year: 1921, vessel: "George M. Humphrey", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "H.W. Johnson", tonnage: 10500, distance: 850, duration: "4.5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 130, year: 1925, vessel: "William A. Irvin", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "E.B. Williams", tonnage: 11000, distance: 650, duration: "4 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 131, year: 1927, vessel: "Cadillac", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "grain", captain: "W.R. Morrison", tonnage: 8400, distance: 950, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 132, year: 1931, vessel: "E.M. Ford", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "F.M. Ford", tonnage: 9800, distance: 850, duration: "4.5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 133, year: 1936, vessel: "Philip R. Clarke", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "P.R. Clarke", tonnage: 10200, distance: 650, duration: "4 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 134, year: 1938, vessel: "William Clay Ford", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "coal", captain: "R.H. Smith", tonnage: 11800, distance: 850, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 135, year: 1942, vessel: "Edward L. Ryerson", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "E.L. Ryerson", tonnage: 12000, distance: 950, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 136, year: 1949, vessel: "John Sherwin", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "J.T. Morrison", tonnage: 13500, distance: 850, duration: "4.5 days", source: "https://www.greatlakesvesselhistory.com/" },

    // Lake Erie Package Freighters (1870-1910)
    { id: 137, year: 1873, vessel: "R.B. Hayes", from: "Cleveland", to: "Detroit", type: "freight", cargo: "package freight", captain: "R.B. Hayes", tonnage: 540, distance: 90, duration: "8 hours", source: "https://linkstothepast.com/marine/index.php" },
    { id: 138, year: 1879, vessel: "City of Concord", from: "Buffalo", to: "Cleveland", type: "freight", cargo: "merchandise", captain: "W.H. Rounds", tonnage: 680, distance: 185, duration: "12 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 139, year: 1884, vessel: "India", from: "Detroit", to: "Buffalo", type: "freight", cargo: "package freight", captain: "J.P. Clark", tonnage: 850, distance: 260, duration: "16 hours", source: "https://linkstothepast.com/marine/index.php" },
    { id: 140, year: 1894, vessel: "State of Ohio", from: "Cleveland", to: "Toledo", type: "freight", cargo: "general cargo", captain: "W.C. Jordan", tonnage: 920, distance: 95, duration: "6 hours", source: "https://greatlakes.bgsu.edu/" },
    { id: 141, year: 1902, vessel: "D.R. Hanna", from: "Cleveland", to: "Buffalo", type: "freight", cargo: "steel products", captain: "D.R. Hanna", tonnage: 1150, distance: 185, duration: "12 hours", source: "https://www.greatlakesvesselhistory.com/" },

    // Modern Era Bulk Freighters (1949-1960s)
    { id: 142, year: 1949, vessel: "Wilfred Sykes", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "W. Sykes", tonnage: 14500, distance: 850, duration: "4 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 143, year: 1952, vessel: "Arthur M. Anderson", from: "Duluth", to: "Detroit", type: "bulk", cargo: "taconite pellets", captain: "R.J. Anderson", tonnage: 16500, distance: 650, duration: "3.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 144, year: 1952, vessel: "Kaye E. Barker", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "K.E. Barker", tonnage: 15500, distance: 950, duration: "4.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 145, year: 1952, vessel: "John G. Munson", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "coal", captain: "J.G. Munson", tonnage: 15800, distance: 850, duration: "4 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 146, year: 1953, vessel: "Saginaw", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "W.R. Morrison", tonnage: 14200, distance: 650, duration: "3.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 147, year: 1958, vessel: "Edmund Fitzgerald", from: "Duluth", to: "Detroit", type: "bulk", cargo: "taconite pellets", captain: "Ernest M. McSorley", tonnage: 26116, distance: 650, duration: "3 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 148, year: 1959, vessel: "Herbert C. Jackson", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "H.C. Jackson", tonnage: 18500, distance: 950, duration: "4 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 149, year: 1960, vessel: "Edward L. Ryerson", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "E.L. Ryerson", tonnage: 19200, distance: 850, duration: "3.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 150, year: 1966, vessel: "Daniel J. Morrell", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "Arthur Crawley", tonnage: 18000, distance: 650, duration: "3.5 days", source: "https://www.crainsdetroit.com/transportation/edmund-fitzgerald-signaled-end-era-great-lakes-shipping" },
    { id: 151, year: 1968, vessel: "Roger Blough", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "taconite pellets", captain: "R. Blough", tonnage: 25000, distance: 850, duration: "3 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },

    // 1000-Foot Super Carriers Era (1972-1981)
    { id: 152, year: 1972, vessel: "Stewart J. Cort", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "S.J. Cort", tonnage: 58000, distance: 650, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 153, year: 1973, vessel: "Presque Isle", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "taconite pellets", captain: "J.R. Williams", tonnage: 62000, distance: 850, duration: "2.5 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 154, year: 1976, vessel: "Edgar B. Speer", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "iron ore", captain: "E.B. Speer", tonnage: 68000, distance: 950, duration: "3 days", source: "https://en.wikipedia.org/wiki/MV_Paul_R._Tregurtha" },
    { id: 155, year: 1978, vessel: "Paul R. Tregurtha", from: "Duluth", to: "Detroit", type: "bulk", cargo: "taconite pellets", captain: "P.R. Tregurtha", tonnage: 68000, distance: 650, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/MV_Paul_R._Tregurtha" },
    { id: 156, year: 1979, vessel: "Edwin H. Gott", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "E.H. Gott", tonnage: 74100, distance: 850, duration: "2.5 days", source: "https://travelthemitten.com/uncategorized/1000-foot-freighters-of-the-great-lakes-our-guide-to-the-biggest-boats/" },
    { id: 157, year: 1979, vessel: "Indiana Harbor", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "coal", captain: "W.D. Stevens", tonnage: 78850, distance: 950, duration: "3 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 158, year: 1980, vessel: "James R. Barker", from: "Duluth", to: "Detroit", type: "bulk", cargo: "taconite pellets", captain: "J.R. Barker", tonnage: 63300, distance: 650, duration: "2.5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 159, year: 1980, vessel: "Mesabi Miner", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "R.H. Morrison", tonnage: 60000, distance: 850, duration: "2.5 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 160, year: 1981, vessel: "Burns Harbor", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "limestone", captain: "B. Harbor", tonnage: 78850, distance: 950, duration: "3 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 161, year: 1981, vessel: "Walter J. McCarthy Jr.", from: "Duluth", to: "Detroit", type: "bulk", cargo: "coal", captain: "W.J. McCarthy", tonnage: 78850, distance: 650, duration: "2.5 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },

    // Modern Integrated Tug-Barge & Recent Super Carriers (1981-2006)
    { id: 162, year: 1981, vessel: "American Integrity", from: "Duluth", to: "Cleveland", type: "bulk", cargo: "iron ore", captain: "T.R. Wilson", tonnage: 78850, distance: 850, duration: "2.5 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 163, year: 1981, vessel: "American Century", from: "Duluth", to: "Buffalo", type: "bulk", cargo: "taconite pellets", captain: "D.F. Campbell", tonnage: 78850, distance: 950, duration: "3 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },
    { id: 164, year: 1981, vessel: "American Spirit", from: "Duluth", to: "Detroit", type: "bulk", cargo: "iron ore", captain: "G.A. Stinson", tonnage: 78850, distance: 650, duration: "2.5 days", source: "https://saultstemarie.com/the-ultimate-list-of-1000-foot-freighters-on-the-great-lakes/" },

    // Stone Hookers - Lake Ontario Quarry Trade (1900-1925)
    { id: 165, year: 1905, vessel: "Mayflower (stone hooker)", from: "Port Credit", to: "Toronto", type: "scow", cargo: "building stone", captain: "William Harrison", tonnage: 45, distance: 15, duration: "4 hours", source: "https://images.maritimehistoryofthegreatlakes.ca/123086/data" },
    { id: 166, year: 1910, vessel: "Nellie Sherwood", from: "Oakville", to: "Toronto", type: "stone hooker", cargo: "cobblestones", captain: "Thomas Oakley", tonnage: 65, distance: 18, duration: "5 hours", source: "https://images.maritimehistoryofthegreatlakes.ca/123086/data" },
    { id: 167, year: 1915, vessel: "Mary Ann", from: "Port Nelson", to: "Toronto", type: "stone hooker", cargo: "limestone", captain: "James Porter", tonnage: 55, distance: 20, duration: "6 hours", source: "https://images.maritimehistoryofthegreatlakes.ca/123086/data" },
    { id: 168, year: 1920, vessel: "Pioneer (scow)", from: "Bronte", to: "Toronto", type: "stone hooker", cargo: "crushed stone", captain: "Robert McNeil", tonnage: 75, distance: 22, duration: "5 hours", source: "https://images.maritimehistoryofthegreatlakes.ca/123086/data" },

    // Harbor Tugboats - Great Lakes Towing Company Fleet (1909-1931)
    { id: 169, year: 1909, vessel: "Arkansas (tug)", from: "Cleveland", to: "Detroit", type: "tugboat", cargo: "towing service", captain: "Great Lakes Towing Co.", tonnage: 98, distance: 90, duration: "12 hours", source: "https://en.wikipedia.org/wiki/The_Great_Lakes_Group" },
    { id: 170, year: 1910, vessel: "North Dakota (tug)", from: "Buffalo", to: "Cleveland", type: "tugboat", cargo: "harbor assist", captain: "Great Lakes Towing Co.", tonnage: 105, distance: 185, duration: "24 hours", source: "https://gltugs.wordpress.com/" },
    { id: 171, year: 1911, vessel: "Minnesota (tug)", from: "Milwaukee", to: "Chicago", type: "tugboat", cargo: "towing service", captain: "Great Lakes Towing Co.", tonnage: 110, distance: 80, duration: "10 hours", source: "https://gltugs.wordpress.com/" },
    { id: 172, year: 1913, vessel: "Oklahoma (tug)", from: "Detroit", to: "Cleveland", type: "tugboat", cargo: "ship assist", captain: "Great Lakes Towing Co.", tonnage: 115, distance: 90, duration: "12 hours", source: "https://gltugs.wordpress.com/" },
    { id: 173, year: 1916, vessel: "Texas (tug)", from: "Duluth", to: "Buffalo", type: "tugboat", cargo: "long distance tow", captain: "Great Lakes Towing Co.", tonnage: 125, distance: 950, duration: "8 days", source: "https://gltugs.wordpress.com/" },
    { id: 174, year: 1921, vessel: "Maine (tug)", from: "Chicago", to: "Milwaukee", type: "tugboat", cargo: "harbor operations", captain: "Great Lakes Towing Co.", tonnage: 118, distance: 80, duration: "10 hours", source: "https://gltugs.wordpress.com/" },
    { id: 175, year: 1928, vessel: "Massachusetts (tug)", from: "Buffalo", to: "Detroit", type: "tugboat", cargo: "towing service", captain: "Great Lakes Towing Co.", tonnage: 135, distance: 260, duration: "36 hours", source: "https://gltugs.wordpress.com/" },

    // Grain Carriers & Canallers (1920-1960)
    { id: 176, year: 1925, vessel: "Harvester", from: "Fort William", to: "Buffalo", type: "bulk", cargo: "wheat (20,000 bushels)", captain: "J.H. Thompson", tonnage: 4500, distance: 950, duration: "5 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 177, year: 1930, vessel: "Wheat King", from: "Port Arthur", to: "Cleveland", type: "bulk", cargo: "barley", captain: "W.R. Morrison", tonnage: 5200, distance: 850, duration: "4.5 days", source: "https://www.maritimehistoryofthegreatlakes.ca/" },
    { id: 178, year: 1935, vessel: "Prairie Farmer", from: "Chicago", to: "Buffalo", type: "canaller", cargo: "corn", captain: "E.L. Johnson", tonnage: 3800, distance: 850, duration: "4 days", source: "https://www.maritimehistoryofthegreatlakes.ca/Documents/gilmore/default.asp?ID=s009" },
    { id: 179, year: 1950, vessel: "Golden Harvest", from: "Duluth", to: "Port Colborne", type: "bulk", cargo: "wheat", captain: "R.D. MacLeod", tonnage: 8500, distance: 1100, duration: "6 days", source: "https://www.greatlakesvesselhistory.com/" },
    { id: 180, year: 1955, vessel: "Barley Queen", from: "Fort William", to: "Prescott", type: "canaller", cargo: "grain mix", captain: "T.R. Wilson", tonnage: 7200, distance: 1000, duration: "5 days", source: "https://www.maritimehistoryofthegreatlakes.ca/" },

    // Limestone & Cement Carriers (1908-1965)
    { id: 181, year: 1910, vessel: "Calcite", from: "Rogers City", to: "Cleveland", type: "bulk", cargo: "limestone", captain: "Solvay Process Co.", tonnage: 3500, distance: 250, duration: "2 days", source: "https://wisconsinshipwrecks.org/wisconsinsmaritimeheritage/GreatLakesCargos.html" },
    { id: 182, year: 1920, vessel: "S.T. Crapo", from: "Rogers City", to: "Detroit", type: "bulk", cargo: "limestone", captain: "Michigan Limestone", tonnage: 5800, distance: 180, duration: "1.5 days", source: "https://greatlakesships.wordpress.com/cement-carriers/" },
    { id: 183, year: 1935, vessel: "Carl D. Bradley", from: "Rogers City", to: "Buffalo", type: "bulk", cargo: "limestone", captain: "R.C. Bryan", tonnage: 10028, distance: 450, duration: "3 days", source: "https://nmgl.org/the-bradley-transportation-line-spring-1979/" },
    { id: 184, year: 1945, vessel: "Myron C. Taylor", from: "Drummond Island", to: "Cleveland", type: "bulk", cargo: "limestone", captain: "Bradley Fleet", tonnage: 8200, distance: 300, duration: "2.5 days", source: "https://greatlakesships.wordpress.com/cement-carriers/" },
    { id: 185, year: 1965, vessel: "J.A.W. Iglehart", from: "Charlevoix", to: "Milwaukee", type: "cement carrier", cargo: "bulk cement", captain: "Medusa Cement", tonnage: 12500, distance: 120, duration: "1 day", source: "https://greatlakesships.wordpress.com/cement-carriers/" },

    // Historic Steam Tugs (1896-1903)
    { id: 186, year: 1896, vessel: "Edna G (steam tug)", from: "Duluth", to: "Two Harbors", type: "tugboat", cargo: "log towing", captain: "Schroeder Lumber Co.", tonnage: 85, distance: 25, duration: "4 hours", source: "https://nmgl.org/" },
    { id: 187, year: 1903, vessel: "MFDS 15 (Tug Ohio)", from: "Milwaukee", to: "Chicago", type: "steam tug", cargo: "harbor towing", captain: "Milwaukee Fireboat", tonnage: 92, distance: 80, duration: "10 hours", source: "https://nmgl.org/tug-ohio/" },

    // Commercial Fishing Vessels (1880-1950)
    { id: 188, year: 1885, vessel: "Mackinaw Boat", from: "Mackinac Island", to: "St. Ignace", type: "fishing", cargo: "whitefish", captain: "Independent fisherman", tonnage: 8, distance: 5, duration: "3 hours", source: "https://www.greatlakesfisheriestrail.org/info.asp?ait=fv&fid=29" },
    { id: 189, year: 1900, vessel: "Beaver Island (gill netter)", from: "Charlevoix", to: "Beaver Island", type: "fishing", cargo: "lake trout", captain: "James McCann", tonnage: 35, distance: 30, duration: "6 hours", source: "https://www.greatlakesfisheriestrail.org/collection.asp?ait=jv&jid=1" },
    { id: 190, year: 1920, vessel: "Turtle Back (gill net tug)", from: "Marquette", to: "Munising", type: "fishing", cargo: "whitefish & trout", captain: "Commercial fishery", tonnage: 45, distance: 40, duration: "8 hours", source: "http://www.greatlakesfisheriestrail.org/collection.asp?ait=jv&jid=10" },
    { id: 191, year: 1935, vessel: "Fish Haven (trap netter)", from: "Port Washington", to: "Milwaukee", type: "fishing", cargo: "perch & chub", captain: "Milwaukee Fishery", tonnage: 55, distance: 28, duration: "5 hours", source: "https://www.greatlakesfisheriestrail.org/" },
    { id: 192, year: 1950, vessel: "Northern Light (steel tug)", from: "Two Rivers", to: "Manitowoc", type: "fishing", cargo: "gill nets", captain: "Commercial fishery", tonnage: 65, distance: 15, duration: "3 hours", source: "https://en.wikipedia.org/wiki/Fish_tug" },

    // Excursion Steamers & Pleasure Boats (1890-1930)
    { id: 193, year: 1890, vessel: "Frank E. Kirby", from: "Detroit", to: "Put-in-Bay", type: "excursion", cargo: "tourists", captain: "Detroit & Cleveland Nav.", tonnage: 850, distance: 60, duration: "3 hours", source: "https://navalmarinearchive.com/research/docs/great_lakes_steam1.html" },
    { id: 194, year: 1892, vessel: "City of Toledo", from: "Toledo", to: "Put-in-Bay", type: "excursion", cargo: "tourists", captain: "Toledo & Islands Steamship", tonnage: 920, distance: 40, duration: "2 hours", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 195, year: 1902, vessel: "Pleasure", from: "Detroit", to: "Tashmoo Park", type: "excursion", cargo: "day trippers", captain: "White Star Line", tonnage: 780, distance: 15, duration: "1 hour", source: "https://historicdetroit.org/buildings/pleasure" },
    { id: 196, year: 1910, vessel: "Ste. Claire", from: "Detroit", to: "Bob-Lo Island", type: "excursion", cargo: "tourists", captain: "Detroit, Belle Isle & Windsor Ferry", tonnage: 1200, distance: 18, duration: "1.5 hours", source: "https://meanderingmichiganhistory.weebly.com/frank-kirbys-great-lakes-legacy-and-the-bob-lo-boats.html" },
    { id: 197, year: 1910, vessel: "Columbia", from: "Detroit", to: "Bob-Lo Island", type: "excursion", cargo: "tourists", captain: "Detroit, Belle Isle & Windsor Ferry", tonnage: 1185, distance: 18, duration: "1.5 hours", source: "https://meanderingmichiganhistory.weebly.com/frank-kirbys-great-lakes-legacy-and-the-bob-lo-boats.html" },
    { id: 198, year: 1915, vessel: "Put-in-Bay", from: "Sandusky", to: "Put-in-Bay", type: "excursion", cargo: "tourists", captain: "Ashley & Dustin Line", tonnage: 650, distance: 25, duration: "1.5 hours", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 199, year: 1925, vessel: "South Shore", from: "Chicago", to: "Michigan City", type: "excursion", cargo: "beach tourists", captain: "Chicago excursions", tonnage: 485, distance: 40, duration: "2 hours", source: "https://thumbwind.com/2019/11/22/great-lakes-cruising/" },

    // Coast Guard Icebreakers & Winter Navigation (1944-1980)
    { id: 200, year: 1944, vessel: "USCGC Mackinaw (WAGB-83)", from: "Cheboygan", to: "Sault Ste. Marie", type: "icebreaker", cargo: "winter navigation", captain: "US Coast Guard", tonnage: 5252, distance: 80, duration: "variable", source: "https://en.wikipedia.org/wiki/USCGC_Mackinaw_(WAGB-83)" },
    { id: 201, year: 1945, vessel: "USCGC Escanaba", from: "Toledo", to: "Detroit", type: "light icebreaker", cargo: "ice breaking", captain: "US Coast Guard", tonnage: 1005, distance: 50, duration: "variable", source: "https://ss.sites.mtu.edu/mhugl/2015/10/11/the-building-and-services-of-the-uscgc-mackinaw-ice-breaker/" },
    { id: 202, year: 1946, vessel: "USCGC Tahoma", from: "Cleveland", to: "Buffalo", type: "light icebreaker", cargo: "shipping lane clearing", captain: "US Coast Guard", tonnage: 1025, distance: 185, duration: "variable", source: "https://ss.sites.mtu.edu/mhugl/2015/10/11/the-building-and-services-of-the-uscgc-mackinaw-ice-breaker/" },
    { id: 203, year: 1968, vessel: "USCGC Westwind", from: "Duluth", to: "Sault Ste. Marie", type: "icebreaker", cargo: "winter operations", captain: "US Coast Guard", tonnage: 3500, distance: 380, duration: "variable", source: "https://www.themackinaw.org/about-us/history/" },
    { id: 204, year: 1975, vessel: "USCGC Mackinaw (winter ops)", from: "Detroit", to: "Duluth", type: "icebreaker", cargo: "extending shipping season", captain: "US Coast Guard", tonnage: 5252, distance: 650, duration: "variable", source: "https://www.themackinaw.org/about-us/history/" },

    // Mackinaw Boats & Early Fishing Craft (1870-1900)
    { id: 205, year: 1875, vessel: "Northern Star (mackinaw)", from: "Manistique", to: "Escanaba", type: "fishing", cargo: "whitefish", captain: "Independent fisherman", tonnage: 6, distance: 45, duration: "8 hours", source: "https://www.greatlakesfisheriestrail.org/info.asp?ait=fv&fid=29" },
    { id: 206, year: 1890, vessel: "Lake Breeze (gill netter)", from: "Kenosha", to: "Racine", type: "fishing", cargo: "perch", captain: "Wisconsin fishery", tonnage: 28, distance: 20, duration: "4 hours", source: "https://www.michigan.gov/dnr/managing-resources/fisheries/business/commercial/history-of-state-licensed-great-lakes-commercial-fishing" },
    { id: 207, year: 1895, vessel: "Island Queen (trap net)", from: "Washington Island", to: "Sturgeon Bay", type: "fishing", cargo: "lake trout", captain: "Door County Fishery", tonnage: 38, distance: 35, duration: "6 hours", source: "https://www.greatlakesfisheriestrail.org/" },

    // Railroad Car Ferries (1911-1953)
    { id: 208, year: 1911, vessel: "Chief Wawatam", from: "Mackinaw City", to: "St. Ignace", type: "car ferry", cargo: "18-26 railroad cars", captain: "Mackinac Transportation Co.", tonnage: 2992, distance: 5, duration: "1 hour", source: "https://www.american-rails.com/wawatam.html" },
    { id: 209, year: 1953, vessel: "SS Badger", from: "Ludington", to: "Manitowoc", type: "car ferry", cargo: "railroad cars & automobiles", captain: "Chesapeake & Ohio Railway", tonnage: 4244, distance: 62, duration: "4 hours", source: "https://www.greatlakesnow.org/2019/08/lake-michigan-ss-badger/" },
    { id: 210, year: 1924, vessel: "City of Midland 41", from: "Ludington", to: "Manitowoc", type: "car ferry", cargo: "railroad cars", captain: "Pere Marquette Railway", tonnage: 3800, distance: 62, duration: "4.5 hours", source: "https://wmhs.org/lake-michigan-adventure-story-owes-its-inspiration-to-authors-mariner-father-and-history-of-car-ferries/" },
    { id: 211, year: 1926, vessel: "Ann Arbor No. 5", from: "Frankfort", to: "Kewaunee", type: "car ferry", cargo: "railroad cars", captain: "Ann Arbor Railroad", tonnage: 3500, distance: 58, duration: "4 hours", source: "https://www.railroadmichigan.com/carferry.html" },
    { id: 212, year: 1938, vessel: "City of Flint 32", from: "Milwaukee", to: "Grand Haven", type: "car ferry", cargo: "railroad cars", captain: "Grand Trunk Railway", tonnage: 3680, distance: 78, duration: "5 hours", source: "https://northernmichiganhistory.com/michigan-rail-ferries/" },

    // Schooners & Lumber Hookers (1850-1890)
    { id: 213, year: 1868, vessel: "C.H. Hackley", from: "Muskegon", to: "Chicago", type: "lumber hooker", cargo: "300,000 board feet lumber", captain: "Great Lakes trader", tonnage: 450, distance: 95, duration: "24 hours", source: "https://nmgl.org/biography-of-the-schooner-ch-hackley-limber-hooker-trader-pirate-vessel-winter-1981/" },
    { id: 214, year: 1860, vessel: "Three-masted Schooner (typical)", from: "Kenosha", to: "Chicago", type: "lumber", cargo: "250,000 board feet lumber", captain: "Wisconsin lumber trade", tonnage: 350, distance: 45, duration: "8 hours", source: "https://www.seagrant.wisc.edu/news/a-deep-dive-into-the-double-centerboard-schooner-shipwrecks-of-the-great-lakes/" },
    { id: 215, year: 1855, vessel: "Two-masted Schooner", from: "Milwaukee", to: "Chicago", type: "grain", cargo: "wheat (8,000 bushels)", captain: "Independent trader", tonnage: 200, distance: 85, duration: "12 hours", source: "https://www.chipublib.org/blogs/post/technology-that-changed-chicago-schooners/" },
    { id: 216, year: 1870, vessel: "Lumber Schooner", from: "Manistee", to: "Chicago", type: "lumber", cargo: "350,000 board feet pine", captain: "Michigan lumber fleet", tonnage: 480, distance: 110, duration: "18 hours", source: "https://www.nps.gov/articles/000/booms-and-busts-of-the-great-lakes-and-manitou-passage.htm" },
    { id: 217, year: 1865, vessel: "Double Centerboard Schooner", from: "Sheboygan", to: "Chicago", type: "lumber", cargo: "280,000 board feet", captain: "Lake Michigan lumber trade", tonnage: 420, distance: 95, duration: "14 hours", source: "https://www.seagrant.wisc.edu/news/a-deep-dive-into-the-double-centerboard-schooner-shipwrecks-of-the-great-lakes/" },
    { id: 218, year: 1875, vessel: "Fast Schooner", from: "Green Bay", to: "Milwaukee", type: "general cargo", cargo: "manufactured goods", captain: "Wisconsin trader", tonnage: 280, distance: 110, duration: "16 hours", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 219, year: 1880, vessel: "Coal Schooner", from: "Buffalo", to: "Detroit", type: "coal", cargo: "Pennsylvania coal (800 tons)", captain: "Lake Erie coal fleet", tonnage: 650, distance: 260, duration: "30 hours", source: "https://search.library.wisc.edu/digital/AGreatLakes" },

    // Whaleback Steamers (1890-1910) - Alexander McDougall's unique design
    { id: 220, year: 1896, vessel: "SS Meteor (Whaleback)", from: "Duluth", to: "Buffalo", type: "bulk carrier", cargo: "iron ore (4,000 tons)", captain: "American Steel Barge Co.", tonnage: 4300, distance: 950, duration: "5 days", source: "https://wi101.wisc.edu/object-history-the-ss-meteor/" },
    { id: 221, year: 1892, vessel: "Frank Rockefeller (Whaleback)", from: "Superior", to: "Cleveland", type: "ore carrier", cargo: "iron ore (3,800 tons)", captain: "American Steel Barge Co.", tonnage: 3900, distance: 880, duration: "5 days", source: "https://americanhistory.si.edu/collections/object/nmah_844252" },
    { id: 222, year: 1891, vessel: "Thomas Wilson (Whaleback)", from: "Duluth", to: "Cleveland", type: "ore carrier", cargo: "iron ore (3,500 tons)", captain: "American Steel Barge Co.", tonnage: 3700, distance: 880, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/wilson/wilwf.html" },
    { id: 223, year: 1894, vessel: "Charles W. Wetmore (Whaleback)", from: "Two Harbors", to: "Erie", type: "ore carrier", cargo: "iron ore (4,200 tons)", captain: "American Steel Barge Co.", tonnage: 4100, distance: 920, duration: "5.5 days", source: "https://nmgl.org/mcdougalls-dream-the-whaleback-spring-1953/" },
    { id: 224, year: 1890, vessel: "Colgate Hoyt (Whaleback barge)", from: "Duluth", to: "Detroit", type: "ore barge", cargo: "iron ore (2,800 tons)", captain: "Towed by steamer", tonnage: 2850, distance: 850, duration: "6 days", source: "https://mndigital.org/projects/primary-source-sets/whaleback-boats-great-lakes" },

    // Passenger Steamers - Overnight "Palace Steamers" (1880-1940)
    { id: 225, year: 1898, vessel: "City of Erie", from: "Buffalo", to: "Cleveland", type: "passenger", cargo: "passengers (overnight)", captain: "Cleveland & Buffalo Transit Co.", tonnage: 2325, distance: 180, duration: "overnight (9 hours)", source: "https://images.maritimehistoryofthegreatlakes.ca/32647/data" },
    { id: 226, year: 1907, vessel: "City of Buffalo", from: "Cleveland", to: "Buffalo", type: "passenger", cargo: "passengers (overnight)", captain: "Cleveland & Buffalo Transit Co.", tonnage: 2400, distance: 180, duration: "overnight (9 hours)", source: "https://en.wikipedia.org/wiki/Great_Lakes_passenger_steamers" },
    { id: 227, year: 1908, vessel: "City of Cleveland III", from: "Detroit", to: "Buffalo", type: "passenger", cargo: "passengers (overnight sidewheeler)", captain: "Detroit & Cleveland Navigation", tonnage: 3200, distance: 280, duration: "overnight", source: "https://tripsintohistory.com/2013/02/09/the-palace-steamers-of-the-great-lakes/" },
    { id: 228, year: 1912, vessel: "Greater Detroit", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers (1,500 capacity)", captain: "Detroit & Cleveland Navigation", tonnage: 3800, distance: 95, duration: "overnight (8 hours)", source: "https://historicdetroit.org/buildings/greater-detroit" },
    { id: 229, year: 1924, vessel: "Seeandbee", from: "Cleveland", to: "Buffalo", type: "passenger", cargo: "passengers (luxury overnight)", captain: "Cleveland & Buffalo Transit Co.", tonnage: 6400, distance: 180, duration: "overnight (9 hours)", source: "https://grokipedia.com/page/Great_Lakes_passenger_steamers" },

    // Package Freighters - Early Multi-Purpose Cargo Vessels (1843-1900)
    { id: 230, year: 1843, vessel: "Hercules", from: "Buffalo", to: "Chicago", type: "package freight", cargo: "general merchandise & passengers", captain: "Railroad connector service", tonnage: 350, distance: 650, duration: "4 days", source: "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/great-lakes-steamships" },
    { id: 231, year: 1869, vessel: "R.J. Hackett", from: "Cleveland", to: "Superior", type: "ore carrier", cargo: "iron ore (1,200 tons)", captain: "Experimental bulk design", tonnage: 1200, distance: 880, duration: "4.5 days", source: "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/great-lakes-steamships" },
    { id: 232, year: 1881, vessel: "Brunswick (iron-hulled)", from: "Duluth", to: "Buffalo", type: "bulk carrier", cargo: "grain (2,000 tons)", captain: "First iron freighter", tonnage: 2200, distance: 950, duration: "5 days", source: "https://en.wikipedia.org/wiki/Lake_freighter" },
    { id: 233, year: 1882, vessel: "Onoko (iron-hulled)", from: "Two Harbors", to: "Cleveland", type: "ore carrier", cargo: "iron ore (3,000 tons)", captain: "First iron ore carrier", tonnage: 2800, distance: 880, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 234, year: 1886, vessel: "Spokane (steel)", from: "Duluth", to: "Buffalo", type: "bulk carrier", cargo: "grain (2,500 tons)", captain: "Early steel vessel", tonnage: 2900, distance: 950, duration: "5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 235, year: 1855, vessel: "Package & Passenger Freighter", from: "Milwaukee", to: "Buffalo", type: "package freight", cargo: "manufactured goods & passengers", captain: "Railroad connector", tonnage: 420, distance: 650, duration: "3.5 days", source: "https://www.encyclopedia.com/history/dictionaries-thesauruses-pictures-and-press-releases/great-lakes-steamships" },

    // Steambarges & Consort Tow Systems (1882-1895)
    { id: 236, year: 1882, vessel: "John M. Osborne (steambarge)", from: "Chicago", to: "Buffalo", type: "towing", cargo: "coal (with 2 consorts)", captain: "Bradley Transportation Co.", tonnage: 1100, distance: 650, duration: "4 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 237, year: 1887, vessel: "Vienna (steambarge)", from: "Cleveland", to: "Duluth", type: "towing", cargo: "supplies (with consorts)", captain: "Bradley Transportation Co.", tonnage: 1050, distance: 880, duration: "4.5 days", source: "https://mnhs.gitlab.io/archive/shipwrecks/www.mnhs.org/places/nationalregister/shipwrecks/mpdf/mpdf2.html" },
    { id: 238, year: 1891, vessel: "Hesper (steambarge)", from: "Milwaukee", to: "Cleveland", type: "towing", cargo: "iron ore (towing schooner-barges)", captain: "Bradley Transportation Co.", tonnage: 1280, distance: 425, duration: "3 days", source: "http://greatlakesdrive.com/GLD/property/hesper-bulk-freighter-1890-1905/" },
    { id: 239, year: 1885, vessel: "Schooner-Barge (consort)", from: "Detroit", to: "Chicago", type: "consort barge", cargo: "lumber (250,000 board feet)", captain: "Towed by steambarge", tonnage: 380, distance: 280, duration: "2.5 days", source: "https://nmgl.org/the-tow-barge-system-revisited/" },
    { id: 240, year: 1890, vessel: "Triple-consort System", from: "Buffalo", to: "Chicago", type: "towing", cargo: "coal (steamer + 3 consorts)", captain: "Multi-barge operation", tonnage: 2800, distance: 650, duration: "5 days", source: "https://nmgl.org/the-tow-barge-system-revisited/" },

    // Lighthouse Tenders - U.S. Lighthouse Service (1874-1962)
    { id: 241, year: 1874, vessel: "USLS Dahlia", from: "Detroit", to: "Thunder Bay Island", type: "lighthouse tender", cargo: "lighthouse supplies", captain: "U.S. Lighthouse Service", tonnage: 175, distance: 210, duration: "24 hours", source: "https://www.history.uscg.mil/Research/Bibliography-Collections/Units/Cutters/Lighthouse-Buoy-Tenders/" },
    { id: 242, year: 1930, vessel: "USCG Amaranth", from: "Sault Ste. Marie", to: "Au Sable", type: "lighthouse tender", cargo: "supplies & buoy service", captain: "U.S. Coast Guard", tonnage: 650, distance: 180, duration: "18 hours", source: "https://archives.uslhs.org/vessels" },
    { id: 243, year: 1935, vessel: "USCG Marigold", from: "Milwaukee", to: "Grand Haven", type: "lighthouse tender", cargo: "buoy maintenance", captain: "U.S. Coast Guard", tonnage: 670, distance: 78, duration: "10 hours", source: "https://uslhs.org/sites/default/files/attached-files/133%20Foot%20Buoy%20Tenders_0.pdf" },
    { id: 244, year: 1920, vessel: "USCG Hyacinth", from: "Cleveland", to: "Buffalo", type: "lighthouse tender", cargo: "navigational aid service", captain: "U.S. Lighthouse Service", tonnage: 540, distance: 180, duration: "16 hours", source: "https://www.history.uscg.mil/Research/Bibliography-Collections/Units/Cutters/Lighthouse-Buoy-Tenders/" },
    { id: 245, year: 1945, vessel: "USCG Woodrush", from: "Duluth", to: "Marquette", type: "buoy tender", cargo: "winter buoy recovery", captain: "U.S. Coast Guard", tonnage: 935, distance: 150, duration: "14 hours", source: "https://archives.uslhs.org/vessels" },

    // Salvage & Wrecking Tugs (1890-1930)
    { id: 246, year: 1919, vessel: "Favorite (wrecking tug)", from: "Cleveland", to: "Detroit", type: "salvage", cargo: "salvage equipment", captain: "Great Lakes Towing Co.", tonnage: 425, distance: 95, duration: "12 hours", source: "https://en.wikipedia.org/wiki/List_of_Great_Lakes_museum_and_historic_ships" },
    { id: 247, year: 1919, vessel: "John Purves", from: "Sturgeon Bay", to: "Milwaukee", type: "salvage", cargo: "wreck recovery operations", captain: "Roen Steamship Co.", tonnage: 380, distance: 85, duration: "10 hours", source: "https://en.wikipedia.org/wiki/List_of_Great_Lakes_museum_and_historic_ships" },
    { id: 248, year: 1907, vessel: "Reid Wrecking Co. tug", from: "Chicago", to: "wreck site", type: "salvage", cargo: "salvage machinery", captain: "Reid Wrecking Company", tonnage: 320, distance: 45, duration: "variable", source: "https://www.wisconsinshipwrecks.org/vessel/Details/31" },
    { id: 249, year: 1895, vessel: "Port Huron Wrecker", from: "Port Huron", to: "Lake Huron wrecks", type: "salvage", cargo: "pontoons & cofferdams", captain: "Port Huron Wrecking Co.", tonnage: 290, distance: 50, duration: "variable", source: "https://www.wisconsinshipwrecks.org/vessel/Details/31" },
    { id: 250, year: 1910, vessel: "Salvage steamer", from: "Buffalo", to: "Lake Erie wreck sites", type: "salvage", cargo: "dive equipment", captain: "Independent salvage operator", tonnage: 340, distance: 85, duration: "variable", source: "https://en.wikipedia.org/wiki/Salvage_tug" }
];

// Great Lakes Shipwrecks (1813-1985)
const wrecks = [
    { name: "Edmund Fitzgerald", year: 1975, lat: 46.9960, lon: -85.1094, lake: "Superior", casualties: 29, cause: "Storm", depth: "530 ft", cargo: "taconite pellets" },
    { name: "Carl D. Bradley", year: 1958, lat: 45.9167, lon: -85.9333, lake: "Michigan", casualties: 33, cause: "Storm", depth: "360 ft", cargo: "limestone" },
    { name: "SS Eastland", year: 1915, lat: 41.8881, lon: -87.6298, lake: "Michigan", casualties: 844, cause: "Capsized", depth: "20 ft", cargo: "passengers" },
    { name: "Lady Elgin", year: 1860, lat: 42.0667, lon: -87.6833, lake: "Michigan", casualties: 300, cause: "Collision", depth: "52 ft", cargo: "passengers" },
    { name: "Lexington", year: 1846, lat: 43.4500, lon: -82.7500, lake: "Huron", casualties: 0, cause: "Fire", depth: "15 ft", cargo: "general" },
    { name: "Daniel J. Morrell", year: 1966, lat: 43.8000, lon: -83.3000, lake: "Huron", casualties: 28, cause: "Storm", depth: "220 ft", cargo: "taconite" },
    { name: "Francisco Morazan", year: 1960, lat: 45.2500, lon: -86.0167, lake: "Michigan", casualties: 0, cause: "Grounding", depth: "15 ft", cargo: "general" },
    { name: "Rouse Simmons", year: 1912, lat: 44.0833, lon: -87.5333, lake: "Michigan", casualties: 17, cause: "Storm", depth: "172 ft", cargo: "Christmas trees" },
    { name: "SS Milwaukee", year: 1929, lat: 43.1667, lon: -87.9167, lake: "Michigan", casualties: 52, cause: "Storm", depth: "125 ft", cargo: "railroad cars" },
    { name: "Cyprus", year: 1907, lat: 48.0167, lon: -89.3500, lake: "Superior", casualties: 23, cause: "Storm", depth: "460 ft", cargo: "iron ore" }
];
