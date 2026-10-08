import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatTemperature } from '../utils/formatters';
import VectorIcon from './VectorIcon';
import WeatherIllustration from './WeatherIllustration';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { cityName, country, temperature, condition, icon } = weatherData;
  const isImageUrl = typeof icon === 'string' && icon.startsWith('http');

  return (
    <View style={styles.heroScene}>
      <View style={styles.locationBlock}>
        <Text style={styles.eyebrow}>CURRENT LOCATION</Text>
        <View style={styles.locationContainer}>
          <VectorIcon name="location" size={16} color="#0284C7" style={styles.locationIcon} />
          <Text style={styles.cityName} numberOfLines={2} ellipsizeMode="tail">
            {cityName}
            {country ? `, ${country}` : ''}
          </Text>
        </View>
      </View>

      <View style={styles.illustrationWrapper}>
        {isImageUrl ? (
          <Image source={{ uri: icon }} style={styles.weatherIconImage} resizeMode="contain" />
        ) : (
          <WeatherIllustration type={condition || 'sun'} size={124} />
        )}
      </View>

      <View style={styles.tempContainer}>
        <Text style={styles.temperature}>{formatTemperature(temperature)}</Text>
      </View>

      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroScene: {
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  locationBlock: {
    alignItems: 'center',
    marginBottom: 16,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 1.8,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 6,
  },
  cityName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  illustrationWrapper: {
    marginVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  weatherIconImage: {
    width: 110,
    height: 110,
  },
  tempContainer: {
    marginTop: 6,
    marginBottom: 2,
  },
  temperature: {
    fontSize: 84,
    fontWeight: '300',
    color: '#0F172A',
    letterSpacing: -2,
    lineHeight: 88,
  },
  condition: {
    fontSize: 18,
    fontWeight: '500',
    color: '#475569',
    textTransform: 'capitalize',
    marginTop: 4,
    letterSpacing: 0.4,
  },
});

export default WeatherCard;
