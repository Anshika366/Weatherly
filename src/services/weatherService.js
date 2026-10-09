import API_CONFIG from './config';
import { getWeatherMeta } from '../utils/weatherIcons';

const PREMAPPED_CITY_COORDS = {
  mumbai: { name: 'Mumbai', country: 'India', lat: 19.0760, lon: 72.8777 },
  delhi: { name: 'Delhi', country: 'India', lat: 28.6139, lon: 77.2090 },
  london: { name: 'London', country: 'United Kingdom', lat: 51.5074, lon: -0.1278 },
  tokyo: { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503 },
  pune: { name: 'Pune', country: 'India', lat: 18.5204, lon: 73.8567 },
  'new york': { name: 'New York', country: 'United States', lat: 40.7128, lon: -74.0060 },
  paris: { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522 },
  sydney: { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093 },
  bengaluru: { name: 'Bengaluru', country: 'India', lat: 12.9716, lon: 77.5946 },
  bangalore: { name: 'Bengaluru', country: 'India', lat: 12.9716, lon: 77.5946 },
  kolkata: { name: 'Kolkata', country: 'India', lat: 22.5726, lon: 88.3639 },
  hyderabad: { name: 'Hyderabad', country: 'India', lat: 17.3850, lon: 78.4867 },
  chennai: { name: 'Chennai', country: 'India', lat: 13.0827, lon: 80.2707 },
  ahmedabad: { name: 'Ahmedabad', country: 'India', lat: 23.0225, lon: 72.5714 },
};

const FALLBACK_CITIES = {
  tokyo: { cityName: 'Tokyo', country: 'Japan', temperature: 18, feelsLike: 17, condition: 'Clear Sky', icon: '☀️', humidity: 62, windSpeed: 11.5, isDay: false },
  mumbai: { cityName: 'Mumbai', country: 'India', temperature: 29, feelsLike: 33, condition: 'Clear Sky', icon: '☀️', humidity: 74, windSpeed: 14.2, isDay: false },
  london: { cityName: 'London', country: 'United Kingdom', temperature: 14, feelsLike: 13, condition: 'Overcast', icon: '☁️', humidity: 81, windSpeed: 16.8, isDay: true },
  'new york': { cityName: 'New York', country: 'United States', temperature: 21, feelsLike: 21, condition: 'Partly Cloudy', icon: '⛅', humidity: 55, windSpeed: 12.0, isDay: true },
  pune: { cityName: 'Pune', country: 'India', temperature: 26, feelsLike: 27, condition: 'Clear Sky', icon: '☀️', humidity: 68, windSpeed: 9.4, isDay: false },
  delhi: { cityName: 'Delhi', country: 'India', temperature: 28, feelsLike: 30, condition: 'Clear Sky', icon: '☀️', humidity: 65, windSpeed: 10.0, isDay: false },
};

const weatherCache = new Map();
const CACHE_TTL_MS = 5 * 60 * 1000;

const fetchWithTimeout = async (url, options = {}, timeoutMs = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

export const fetchWeatherByCity = async (cityName) => {
  const trimmedCity = cityName ? cityName.trim() : '';
  if (!trimmedCity) {
    throw new Error('Please enter a city name to search.');
  }

  const cityKey = trimmedCity.toLowerCase();
  const cached = weatherCache.get(cityKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.data;
  }

  let result;
  if (API_CONFIG.WEATHER_API_KEY) {
    result = await fetchFromOpenWeatherMap(trimmedCity);
  } else {
    result = await fetchFromOpenMeteo(trimmedCity);
  }

  weatherCache.set(cityKey, { data: result, timestamp: Date.now() });
  return result;
};

const fetchFromOpenMeteo = async (cityName) => {
  const cityKey = cityName.trim().toLowerCase();

  try {
    let latitude, longitude, resolvedCityName, country;

    if (PREMAPPED_CITY_COORDS[cityKey]) {
      const pre = PREMAPPED_CITY_COORDS[cityKey];
      latitude = pre.lat;
      longitude = pre.lon;
      resolvedCityName = pre.name;
      country = pre.country;
    } else {
      const geoUrl = `${API_CONFIG.OPEN_METEO_GEO_URL}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
      const geoResponse = await fetchWithTimeout(geoUrl, {}, 5000);

      if (!geoResponse.ok) {
        throw new Error('Network error. Failed to reach geocoding service.');
      }

      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error(`City "${cityName}" not found. Please check spelling.`);
      }

      const location = geoData.results[0];
      latitude = location.latitude;
      longitude = location.longitude;
      resolvedCityName = location.name;
      country = location.country || location.admin1 || '';
    }

    const weatherUrl = `${API_CONFIG.OPEN_METEO_FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day`;
    const weatherResponse = await fetchWithTimeout(weatherUrl, {}, 5000);

    if (!weatherResponse.ok) {
      throw new Error('Failed to retrieve weather data for this location.');
    }

    const weatherData = await weatherResponse.json();
    const current = weatherData.current;
    const meta = getWeatherMeta(current.weather_code);

    return {
      cityName: resolvedCityName,
      country: country,
      temperature: Math.round(current.temperature_2m),
      feelsLike: Math.round(current.apparent_temperature),
      condition: meta.description,
      icon: meta.icon,
      humidity: Math.round(current.relative_humidity_2m),
      windSpeed: Math.round(current.wind_speed_10m),
      isDay: current.is_day === 1,
    };
  } catch (error) {
    if (FALLBACK_CITIES[cityKey]) {
      return FALLBACK_CITIES[cityKey];
    }
    if (error.name === 'AbortError' || error.message.includes('Network request failed') || error.message.includes('Network error')) {
      throw new Error('Network timeout. Please check your internet connection and try again.');
    }
    throw error;
  }
};

const fetchFromOpenWeatherMap = async (cityName) => {
  const cityKey = cityName.trim().toLowerCase();

  try {
    const url = `${API_CONFIG.OPENWEATHER_URL}?q=${encodeURIComponent(cityName)}&appid=${API_CONFIG.WEATHER_API_KEY}&units=metric`;
    const response = await fetchWithTimeout(url, {}, 5000);

    if (response.status === 404) {
      throw new Error(`City "${cityName}" not found. Please check spelling.`);
    }

    if (!response.ok) {
      throw new Error('Failed to fetch weather data from API.');
    }

    const data = await response.json();

    return {
      cityName: data.name,
      country: data.sys ? data.sys.country : '',
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0] ? data.weather[0].main : 'Clear',
      icon: data.weather[0] ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : '☀️',
      humidity: Math.round(data.main.humidity),
      windSpeed: Math.round(data.wind.speed * 3.6),
      isDay: data.weather[0] ? data.weather[0].icon.endsWith('d') : true,
    };
  } catch (error) {
    if (FALLBACK_CITIES[cityKey]) {
      return FALLBACK_CITIES[cityKey];
    }
    if (error.name === 'AbortError' || error.message.includes('Network request failed')) {
      throw new Error('Network timeout. Please check your internet connection and try again.');
    }
    throw error;
  }
};
