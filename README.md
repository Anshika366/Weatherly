# Weatherly

Weatherly is a React Native Android application that provides real-time weather information for cities worldwide. Built with JavaScript and native React Native components, it delivers current temperature, weather conditions, humidity, wind speed, and feels-like temperature in a clean dark theme interface.

## Features

- **City Search**: Query current weather data for any city globally by name.
- **Quick Search Suggestions**: Tap preset chips for popular cities (London, Tokyo, Mumbai, New York, Paris).
- **Core Weather Metrics**: Displays temperature (°C), weather condition description, feels-like temperature (°C), humidity (%), and wind speed (km/h).
- **Dynamic Weather Illustrations**: Vector illustrations mapped directly to weather condition codes (clear sky, clouds, rain, snow, thunderstorm, fog).
- **Loading State**: Animated indicator during network requests.
- **Error Handling**: Handles invalid city queries, empty inputs, and network failures with informative error messages.

## Tech Stack

- **Framework**: React Native (v0.87.1)
- **Library**: React (v19.2.3)
- **Language**: JavaScript (ES6+)
- **Layout & Safety**: `react-native-safe-area-context` (v5.5.2)
- **Weather API**: Open-Meteo REST API (Default keyless weather & geocoding service)

## Project Structure

```text
Weatherly/
├── src/
│   ├── components/
│   │   ├── ErrorView.js              # Error state display component
│   │   ├── LoadingView.js            # Loading indicator component
│   │   ├── SearchBar.js              # Search bar and quick-search city chips
│   │   ├── WeatherCard.js            # Primary card displaying city, temp, & condition
│   │   ├── WeatherDetailsCard.js     # Grid displaying Feels Like, Humidity, & Wind Speed
│   │   └── WeatherIllustration.js   # Dynamic weather vector illustrations
│   ├── screens/
│   │   └── HomeScreen.js             # Main dashboard container screen
│   ├── services/
│   │   ├── config.js                 # API endpoints and configuration settings
│   │   └── weatherService.js         # Geocoding lookup and weather fetch functions
│   └── utils/
│       ├── formatters.js             # Text and date formatting utilities
│       └── weatherIcons.js           # Weather code to icon mapping logic
├── App.js                            # Root application component
├── index.js                          # React Native application entry point
├── package.json                      # Project metadata, scripts, and dependencies
└── .env.example                      # Environment template for optional API key configuration
```

## How It Works

1. **User Input**: The user enters a city name or taps a quick-search chip in `SearchBar`.
2. **Geocoding Request**: `weatherService` calls the Open-Meteo Geocoding API to resolve the city name to latitude and longitude coordinates.
3. **Weather Request**: `weatherService` uses the coordinates to fetch current weather parameters (temperature, humidity, wind speed, weather code) from the Open-Meteo Forecast API.
4. **UI Update**: The fetched data is processed and presented across `WeatherCard` and `WeatherDetailsCard`. If the city is not found or a network error occurs, `ErrorView` displays a feedback screen.

## API

The app uses the **Open-Meteo REST API** (`geocoding-api.open-meteo.com` and `api.open-meteo.com`) by default.
- Open-Meteo is free and keyless, requiring no API key registration.
- It provides location geocoding and current weather data out of the box.
- Optional: OpenWeatherMap API is supported as a fallback if `WEATHER_API_KEY` is configured in a `.env` file.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js**: `>= 22.11.0` (as specified in `package.json`)
- **npm**: Package manager (included with Node.js)
- **Java Development Kit (JDK)**: JDK 17 or higher
- **Android SDK & Studio**: Configured with an Android Virtual Device (AVD) emulator
- **Android Environment Variables**: `ANDROID_HOME` set in your system environment variables

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Anshika366/Weatherly.git
   cd Weatherly
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Optional API Key Setup**:
   The default Open-Meteo provider works without setup. If you wish to use OpenWeatherMap:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and assign your API key:
   ```env
   WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

## Running the App

1. **Start the Android Emulator**:
   Launch an AVD emulator from Android Studio, or execute:
   ```bash
   emulator -avd <your_avd_name>
   ```

2. **Start Metro Bundler**:
   In your terminal, run:
   ```bash
   npx react-native start
   ```

3. **Build and Run on Android**:
   In a separate terminal window, execute:
   ```bash
   npx react-native run-android
   ```

## Usage

1. Launch the application on the Android emulator.
2. Enter any valid city name (e.g., `London`, `Tokyo`, `Mumbai`, `Paris`) in the search input and press Search.
3. Alternatively, tap any of the quick-search city chips below the search bar.
4. View the updated current weather summary and detailed atmospheric metrics.

## Error and Loading States

- **Loading State**: Displays a centered activity spinner while network requests are resolving.
- **Error State**: Displays clear feedback for empty input submissions, invalid city queries, or network failures.
