#!/usr/bin/env python3
"""
Convert NOAA GLERL shores.dat file to GeoJSON format.
Format: Each line has 4 lon/lat pairs followed by a line number
"""

import json
import re

def parse_shores_dat(filename):
    """Parse the shores.dat file and return GeoJSON structure."""

    geojson = {
        "type": "FeatureCollection",
        "features": []
    }

    current_lake = None
    coordinates = []

    with open(filename, 'r') as f:
        for line in f:
            line = line.strip()

            # Check if this is a lake header
            if 'LAKE' in line and 'SHORELINE' in line:
                # Save previous lake if exists
                if current_lake and coordinates:
                    feature = {
                        "type": "Feature",
                        "properties": {
                            "name": current_lake
                        },
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [coordinates]
                        }
                    }
                    geojson["features"].append(feature)

                # Extract lake name
                current_lake = line.strip()
                coordinates = []
                continue

            # Skip empty lines
            if not line:
                continue

            # Parse coordinate line
            # Format: lon1 lat1 lon2 lat2 lon3 lat3 lon4 lat4    line_number
            parts = line.split()
            if len(parts) >= 8:
                # Extract 4 coordinate pairs (ignore line number at end)
                for i in range(0, 8, 2):
                    try:
                        lon = -float(parts[i])  # Convert to negative for Western Hemisphere
                        lat = float(parts[i + 1])
                        # Skip zero coordinates (data separators)
                        if lon != 0.0 or lat != 0.0:
                            coordinates.append([lon, lat])
                    except (ValueError, IndexError):
                        continue

    # Don't forget the last lake
    if current_lake and coordinates:
        feature = {
            "type": "Feature",
            "properties": {
                "name": current_lake
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [coordinates]
            }
        }
        geojson["features"].append(feature)

    return geojson

if __name__ == "__main__":
    print("Converting shores.dat to GeoJSON...")

    # Parse the file
    geojson_data = parse_shores_dat("shores.dat")

    # Write to file
    with open("great-lakes-shores.geojson", 'w') as f:
        json.dump(geojson_data, f, indent=2)

    print(f"✓ Converted {len(geojson_data['features'])} lakes to great-lakes-shores.geojson")

    # Print summary
    for feature in geojson_data['features']:
        name = feature['properties']['name']
        coords_count = len(feature['geometry']['coordinates'][0])
        print(f"  - {name}: {coords_count} coordinate points")
