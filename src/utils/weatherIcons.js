const WEATHER_CODE_MAP = {
  0: { description: 'Clear Sky', icon: '☀️' },
  1: { description: 'Mainly Clear', icon: '🌤️' },
  2: { description: 'Partly Cloudy', icon: '⛅' },
  3: { description: 'Overcast', icon: '☁️' },
  45: { description: 'Foggy', icon: '🌫️' },
  48: { description: 'Depositing Rime Fog', icon: '🌫️' },
  51: { description: 'Light Drizzle', icon: '🌧️' },
  53: { description: 'Moderate Drizzle', icon: '🌧️' },
  55: { description: 'Dense Drizzle', icon: '🌧️' },
  61: { description: 'Slight Rain', icon: '🌧️' },
  63: { description: 'Moderate Rain', icon: '🌧️' },
  65: { description: 'Heavy Rain', icon: '🌧️' },
  71: { description: 'Slight Snow', icon: '❄️' },
  73: { description: 'Moderate Snow', icon: '❄️' },
  75: { description: 'Heavy Snow', icon: '❄️' },
  80: { description: 'Rain Showers', icon: '🌦️' },
  81: { description: 'Moderate Rain Showers', icon: '🌦️' },
  82: { description: 'Violent Rain Showers', icon: '⛈️' },
  95: { description: 'Thunderstorm', icon: '🌩️' },
  96: { description: 'Thunderstorm with Hail', icon: '⛈️' },
  99: { description: 'Heavy Thunderstorm', icon: '⛈️' },
};

export const getWeatherMeta = (code) => {
  return WEATHER_CODE_MAP[code] || { description: 'Unknown Weather', icon: '🌡️' };
};

export const getOpenWeatherIcon = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};
