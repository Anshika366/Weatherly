import API_CONFIG from './config';
import { getWeatherMeta } from '../utils/weatherIcons';

export const fetchWeatherByCity = async (cityName) => {
  const trimmedCity = cityName ? cityName.trim() : '';

  if (!trimmedCity) {
    throw new Error('Please enter a city name to search.');
  }

  if (API_CONFIG.WEATHER_API_KEY) {
    return await fetchFromOpenWeatherMap(trimmedCity);
  } else {
    return await fetchFromOpenMeteo(trimmedCity);
  }
};

const fetchFromOpenMeteo = async (cityName) => {
  try {
    const geoUrl = `${API_CONFIG.OPEN_METEO_GEO_URL}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
    const geoResponse = await fetch(geoUrl);

    if (!geoResponse.ok) {
      throw new Error('Network error. Failed to reach weather service.');
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`City "${cityName}" not found. Please check spelling.`);
    }

    const location = geoData.results[0];
    const latitude = location.latitude;
    const longitude = location.longitude;
    const resolvedCityName = location.name;
    const country = location.country || location.admin1 || '';

    const weatherUrl = `${API_CONFIG.OPEN_METEO_FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`;
    const weatherResponse = await fetch(weatherUrl);

    if (!weatherResponse.ok) {
      throw new Error('Failed to retrieve weather data for this location.');
    }

    const weatherData = await weatherResponse.json();
    const current = weatherData.current;
    const meta = getWeatherMeta(current.weather_code);

    return {
      cityName: resolvedCityName,
      country: country,
      temperature: current.temperature_2m,
      feelsLike: current.apparent_temperature,
      condition: meta.description,
      icon: meta.icon,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
    };
  } catch (error) {
    if (error.message.includes('Network request failed') || error.message.includes('Network error')) {
      throw new Error('Network connection error. Please check your internet connection.');
    }
    throw error;
  }
};

const fetchFromOpenWeatherMap = async (cityName) => {
  try {
    const url = `${API_CONFIG.OPENWEATHER_URL}?q=${encodeURIComponent(cityName)}&appid=${API_CONFIG.WEATHER_API_KEY}&units=metric`;
    const response = await fetch(url);

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
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      condition: data.weather[0] ? data.weather[0].main : 'Clear',
      icon: data.weather[0] ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : '☀️',
      humidity: data.main.humidity,
      windSpeed: data.wind.speed * 3.6,
    };
  } catch (error) {
    if (error.message.includes('Network request failed')) {
      throw new Error('Network connection error. Please check your internet connection.');
    }
    throw error;
  }
};
