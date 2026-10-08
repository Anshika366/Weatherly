import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import WeatherIllustration from './WeatherIllustration';

const LoadingView = ({ message = 'Checking the sky...' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationWrapper}>
        <WeatherIllustration type="sun" size={80} />
      </View>
      <View style={styles.spinnerRow}>
        <ActivityIndicator size="small" color="#0284C7" style={styles.spinner} />
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginVertical: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  illustrationWrapper: {
    marginBottom: 18,
  },
  spinnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spinner: {
    marginRight: 10,
  },
  text: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

export default LoadingView;
