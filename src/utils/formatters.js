export const formatTemperature = (temp) => {
  if (temp === undefined || temp === null) return '--°C';
  return `${Math.round(temp)}°C`;
};

export const formatWindSpeed = (speed) => {
  if (speed === undefined || speed === null) return '-- km/h';
  return `${Math.round(speed)} km/h`;
};

export const formatHumidity = (humidity) => {
  if (humidity === undefined || humidity === null) return '--%';
  return `${Math.round(humidity)}%`;
};
