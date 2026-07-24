# Xiangshan Smart Tourism GIS Platform

## About This Project
This project is a web-based GIS tourism platform for Xiangshan County, Ningbo, China.
I built this project from scratch to explore how GIS and computer programming can organize fragmented local travel data and create a straightforward interactive map for tourists.

## Project Motivation
Xiangshan has lots of  tourism resources, including coastal beaches, historic island villages, and local seafood specialties.
However, all tourism introductions, spot coordinates and hotel information are split across dozens of unrelated websites with no unified viewing portal.

During development, I hit a major technical roadblock: I initially used Amap as my base map, but cross-origin restrictions created large blank gray blocks covering all ocean areas of the map. I spent several hours adjusting tile links and testing fixes, and finally replaced the map source with open-source OpenStreetMap to fully resolve the display error.

I wanted to build a simple interactive map that combines geographic information with basic computer science methods to make tourism exploration easier.

## Main Features
### 1. Interactive GIS Map
- Display Xiangshan tourism locations on an interactive map
- View basic information about each location by clicking markers
- Zoom and drag to freely explore geographic distribution of local attractions

### 2. Tourism Category Filtering
Users can filter locations by category:
- Attractions
- Food
- Hotels
- Transportation

This allows users to explore different types of tourism resources more efficiently without scrolling through every marker.

### 3. Smart Recommendation
I created a simple recommendation system that ranks tourism locations based on:
- User preference
- Tourism category
- Location rating

 It’s a simple experiment to see how even a basic scoring algorithms can support travel decisions.

### 4. Spatial Analysis
The project includes core geographic calculation functions I implemented myself:
- Haversine formula to calculate real distance between two scenic spots
- Simple multi-day travel route recommendations

These features calculate data using raw longitude and latitude coordinates.

### 5. Data Dashboard
The platform automatically summarizes tourism resources, including:
- Number of attractions
- Food locations
- Hotels
- Transportation points

## Technologies Used
### Frontend
- HTML
- Custom CSS styling
- Vanilla JavaScript

### GIS Technologies
- Leaflet
- OpenStreetMap
- CARTO Map Tiles

### Computer Science Concepts
- Spatial data sorting and cleaning
- Multi-condition filtering algorithms
- Custom scoring algorithms for recommendation
- Geographic distance mathematical calculation

## What I Learned
Through this full independent development project, I learned how web development and GIS technology integrate in real scenarios.
I practiced these key skills:
- Processing and calculating geographic coordinate data
- Building interactive web maps with the Leaflet library
- Debugging cross-origin map tile loading failures
- Designing lightweight algorithms for user recommendation
- Standardizing layered file structure for web projects

## Future Improvements
Possible future improvements include:
- Adding more complete Xiangshan tourism datasets stored in GeoJSON format
- Building automatic base map switching function to avoid blank tile loading issues
- Improving recommendation scoring rules for higher matching accuracy
- Adding real-time supplementary information such as local weather or seasonal events

## Project Goal
This project is an exploration of how computer science can solve real geographic and local tourism problems.
This project gave me a chance to actually combine front-end coding with GIS tools and see how they work together on a real problem.

## Project Information
Personal Portfolio Project for UIUC CS + GIS Admission
Developed by Zeyu Yan

## AI Usage Disclosure
ChatGPT was only used to adjust minor sentence fluency; all core code, spatial logic, project design and bug troubleshooting work were fully completed independently by myself.