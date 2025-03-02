# React Native Weather App

## Overview

This is a React Native weather application built using Expo. Users can search for weather conditions in any city, save favorite locations, and view them later in a "Saved Locations" tab.

## Features

- Search for current weather by city name
- Save searched locations to a database
- View and delete saved locations
- Tab navigation for easy access to Home, Search, and Saved Locations

## Technologies Used

- **React Native** (with Expo)
- **Open Meteo API** (for weather data)
- **Expo SQLite** (for local storage)
- **React Navigation** (for tab-based navigation)
- **@expo/vector-icons** (for icons)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/weather-app.git
   cd weather-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npx expo start
   ```

## File Structure

```
.
├── App.js               # Main entry point with navigation
├── screens/
│   ├── HomeScreen.js    # Placeholder home screen
│   ├── SearchWeatherScreen.js  # Search for weather by city
│   ├── SavedScreen.js   # Display and manage saved locations
├── components/
│   ├── WeatherCard.js   # Component for displaying weather data
├── database/
│   ├── database.js      # SQLite database setup and queries
└── README.md            # Project documentation
```

## API Usage

The app fetches weather data from **Open Meteo API**.

- **Geocoding API** (to fetch city coordinates):
  ```
  https://geocoding-api.open-meteo.com/v1/search?name={CITY_NAME}&count=1
  ```
- **Weather API** (to fetch weather details using latitude and longitude):
  ```
  https://api.open-meteo.com/v1/forecast?latitude={LAT}&longitude={LON}&current_weather=true
  ```

## SQLite Integration

The app uses SQLite to store and manage saved locations locally.

- **Table Schema:**
  ```sql
  CREATE TABLE IF NOT EXISTS saved_locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT,
    latitude REAL,
    longitude REAL
  );
  ```
- **Functions:**
  - `createTable()` – Initializes the database
  - `saveLocation(city, lat, lon)` – Saves a location
  - `getSavedLocations()` – Retrieves saved locations
  - `deleteLocation(id)` – Deletes a saved location

## Navigation

The app uses `react-navigation` with a bottom tab navigator:

- **Home** (default placeholder screen)
- **Search** (weather search functionality)
- **Saved** (displays saved locations and allows deletion)

## Future Enhancements

- Improve UI design with animations and themes
- Add a detailed weather view with hourly forecasts
- Implement a settings screen for unit conversions (Celsius/Fahrenheit)
- Enable push notifications for weather alerts
