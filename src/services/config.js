const API_CONFIG = {
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || '',
  OPEN_METEO_GEO_URL: 'https://geocoding-api.open-meteo.com/v1/search',
  OPEN_METEO_FORECAST_URL: 'https://api.open-meteo.com/v1/forecast',
  OPENWEATHER_URL: 'https://api.openweathermap.org/data/2.5/weather',
};

export default API_CONFIG;
