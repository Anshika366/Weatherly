import React from 'react';
import { View, StyleSheet } from 'react-native';

export const VectorIcon = ({ name, size = 20, color = '#0284C7', style }) => {
  switch (name) {
    case 'search':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: (size * 0.65) / 2,
              borderWidth: 2,
              borderColor: color,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <View
            style={{
              width: size * 0.4,
              height: 2,
              backgroundColor: color,
              position: 'absolute',
              bottom: size * 0.15,
              right: size * 0.05,
              transform: [{ rotate: '45deg' }],
            }}
          />
        </View>
      );

    case 'location':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.55,
              height: size * 0.55,
              borderRadius: (size * 0.55) / 2,
              backgroundColor: color,
              position: 'absolute',
              top: 0,
            }}
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: size * 0.25,
              borderRightWidth: size * 0.25,
              borderTopWidth: size * 0.45,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: color,
              position: 'absolute',
              bottom: size * 0.1,
            }}
          />
          <View
            style={{
              width: size * 0.22,
              height: size * 0.22,
              borderRadius: (size * 0.22) / 2,
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              top: size * 0.16,
            }}
          />
        </View>
      );

    case 'droplet':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.6,
              height: size * 0.6,
              borderRadius: (size * 0.6) / 2,
              backgroundColor: color,
              position: 'absolute',
              bottom: size * 0.05,
            }}
          />
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: size * 0.3,
              borderRightWidth: size * 0.3,
              borderBottomWidth: size * 0.45,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: color,
              position: 'absolute',
              top: size * 0.05,
            }}
          />
        </View>
      );

    case 'wind':
      return (
        <View style={[{ width: size, height: size, justifyContent: 'space-around' }, style]}>
          <View
            style={{
              width: '90%',
              height: 2.5,
              backgroundColor: color,
              borderRadius: 1.5,
              alignSelf: 'flex-start',
            }}
          />
          <View
            style={{
              width: '100%',
              height: 2.5,
              backgroundColor: color,
              borderRadius: 1.5,
            }}
          />
          <View
            style={{
              width: '75%',
              height: 2.5,
              backgroundColor: color,
              borderRadius: 1.5,
              alignSelf: 'flex-end',
            }}
          />
        </View>
      );

    case 'thermometer':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.28,
              height: size * 0.6,
              borderRadius: (size * 0.28) / 2,
              borderWidth: 2,
              borderColor: color,
              position: 'absolute',
              top: size * 0.05,
            }}
          />
          <View
            style={{
              width: size * 0.48,
              height: size * 0.48,
              borderRadius: (size * 0.48) / 2,
              backgroundColor: color,
              position: 'absolute',
              bottom: size * 0.05,
            }}
          />
        </View>
      );

    case 'alert':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: 0,
              height: 0,
              borderLeftWidth: size * 0.45,
              borderRightWidth: size * 0.45,
              borderBottomWidth: size * 0.85,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: color,
            }}
          />
          <View
            style={{
              width: 2.5,
              height: size * 0.3,
              backgroundColor: '#FEF2F2',
              position: 'absolute',
              top: size * 0.3,
              borderRadius: 1,
            }}
          />
          <View
            style={{
              width: 3,
              height: 3,
              borderRadius: 1.5,
              backgroundColor: '#FEF2F2',
              position: 'absolute',
              bottom: size * 0.2,
            }}
          />
        </View>
      );

    case 'arrow':
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.4,
              height: size * 0.4,
              borderTopWidth: 2,
              borderRightWidth: 2,
              borderColor: color,
              transform: [{ rotate: '45deg' }],
            }}
          />
        </View>
      );

    case 'sun':
    default:
      return (
        <View style={[{ width: size, height: size }, styles.center, style]}>
          <View
            style={{
              width: size * 0.55,
              height: size * 0.55,
              borderRadius: (size * 0.55) / 2,
              backgroundColor: color,
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: size / 2,
              borderWidth: 1.5,
              borderColor: color,
              borderStyle: 'dashed',
              opacity: 0.6,
            }}
          />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VectorIcon;
