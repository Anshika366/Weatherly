import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import VectorIcon from './VectorIcon';

const ErrorView = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <VectorIcon name="alert" size={20} color="#E11D48" />
      </View>
      <Text style={styles.title}>Couldn't find that city</Text>
      <Text style={styles.message} numberOfLines={4} ellipsizeMode="tail">
        {message || 'Check the spelling and try again.'}
      </Text>
      {onRetry && (
        <TouchableOpacity style={styles.retryButton} onPress={onRetry} activeOpacity={0.7}>
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF5F5',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#FECDD3',
    elevation: 2,
    shadowColor: '#E11D48',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFE4E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FDA4AF',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9F1239',
    marginBottom: 6,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    color: '#BE123C',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 18,
    paddingHorizontal: 6,
    maxWidth: '100%',
  },
  retryButton: {
    backgroundColor: '#E11D48',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 18,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

export default ErrorView;
