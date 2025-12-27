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
    // Early Steam Era (1818-1850)
    { id: 1, year: 1818, vessel: "Walk-in-the-Water", from: "Buffalo", to: "Detroit", type: "passenger", cargo: "passengers", captain: "Job Fish", tonnage: 338, distance: 260, duration: "44 hours", source: "https://www.mpl.org/special_collections/great_lakes_marine_collection.php" },
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
    { id: 54, year: 1950, vessel: "North American", from: "Detroit", to: "Duluth", type: "passenger", cargo: "passengers", captain: "D.R. MacLeod", tonnage: 5100, distance: 650, duration: "3 days", source: "https://www.cruiselinehistory.com/sailing-the-great-lakes-on-the-ss-south-american-and-ss-north-american/" }
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
