import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import WeatherDetailsCard from '../components/WeatherDetailsCard';
import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';
import WeatherIllustration from '../components/WeatherIllustration';
import { fetchWeatherByCity } from '../services/weatherService';

const POPULAR_CITIES = ['Mumbai', 'Delhi', 'London', 'Tokyo', 'Pune'];

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastSearchedCity, setLastSearchedCity] = useState('');

  const handleSearch = async (city) => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setLastSearchedCity(city);

    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message || 'An unexpected error occurred while fetching weather.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastSearchedCity) {
      handleSearch(lastSearchedCity);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Weatherly</Text>
          <Text style={styles.headerSubtitle}>Weather at a glance.</Text>
        </View>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {!weatherData && !isLoading && !error && (
          <View style={styles.welcomeScene}>
            <View style={styles.illustrationWrapper}>
              <WeatherIllustration type="sun" size={100} />
            </View>
            <Text style={styles.welcomeTitle}>Discover your weather</Text>
            <Text style={styles.welcomeSubtitle}>
              Search any city to see current conditions.
            </Text>

            <View style={styles.quickSearchDivider}>
              <Text style={styles.quickSearchLabel}>POPULAR CITIES</Text>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipContainer}
            >
              {POPULAR_CITIES.map((city) => (
                <TouchableOpacity
                  key={city}
                  style={styles.chip}
                  onPress={() => handleSearch(city)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.chipText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {isLoading && <LoadingView />}

        {error && !isLoading && (
          <ErrorView message={error} onRetry={lastSearchedCity ? handleRetry : null} />
        )}

        {weatherData && !isLoading && !error && (
          <View style={styles.resultsContainer}>
            <WeatherCard weatherData={weatherData} />
            <WeatherDetailsCard
              humidity={weatherData.humidity}
              windSpeed={weatherData.windSpeed}
              feelsLike={weatherData.feelsLike}
            />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  headerRow: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.6,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  welcomeScene: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 4,
  },
  illustrationWrapper: {
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  welcomeSubtitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  quickSearchDivider: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 18,
  },
  quickSearchLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94A3B8',
    letterSpacing: 1.8,
  },
  chipContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 2,
  },
  chip: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 1,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  chipText: {
    color: '#0284C7',
    fontSize: 13,
    fontWeight: '600',
  },
  resultsContainer: {
    marginTop: 0,
  },
});

export default HomeScreen;
