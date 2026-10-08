import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatHumidity, formatWindSpeed, formatTemperature } from '../utils/formatters';
import VectorIcon from './VectorIcon';

const WeatherDetailsCard = ({ humidity, windSpeed, feelsLike }) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.sectionHeader}>WEATHER DETAILS</Text>
      <View style={styles.statStrip}>
        <View style={styles.column}>
          <View style={styles.iconCircle}>
            <VectorIcon name="droplet" size={15} color="#0284C7" />
          </View>
          <Text style={styles.value}>{formatHumidity(humidity)}</Text>
          <Text style={styles.label}>Humidity</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.column}>
          <View style={styles.iconCircle}>
            <VectorIcon name="wind" size={15} color="#0284C7" />
          </View>
          <Text style={styles.value}>{formatWindSpeed(windSpeed)}</Text>
          <Text style={styles.label}>Wind</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.column}>
          <View style={styles.iconCircle}>
            <VectorIcon name="thermometer" size={15} color="#0284C7" />
          </View>
          <Text style={styles.value}>{formatTemperature(feelsLike)}</Text>
          <Text style={styles.label}>Feels Like</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 1.8,
    marginBottom: 10,
    marginLeft: 6,
  },
  statStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: 38,
    backgroundColor: '#F1F5F9',
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E0F2FE',
  },
  label: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
});

export default WeatherDetailsCard;
