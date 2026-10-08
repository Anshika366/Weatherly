import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import VectorIcon from './VectorIcon';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <VectorIcon name="search" size={16} color="#64748B" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for a city..."
          placeholderTextColor="#94A3B8"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          editable={!isLoading}
          autoCapitalize="words"
          autoCorrect={false}
          numberOfLines={1}
          multiline={false}
        />
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleSearch}
          disabled={isLoading}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 2,
    shadowColor: '#64748B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 0,
    marginRight: 6,
  },
  button: {
    height: 38,
    paddingHorizontal: 18,
    backgroundColor: '#0284C7',
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#94A3B8',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default SearchBar;
