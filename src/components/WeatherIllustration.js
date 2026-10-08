import React from 'react';
import { View, StyleSheet } from 'react-native';

const WeatherIllustration = ({ type = 'Clear', size = 120 }) => {
  const cond = (type || '').toLowerCase();

  const isClear = cond.includes('clear') || cond.includes('sun');
  const isPartlyCloudy = cond.includes('partly') || cond.includes('few') || cond.includes('scattered');
  const isThunder = cond.includes('thunder') || cond.includes('storm');
  const isHeavyRain = cond.includes('heavy') || cond.includes('torrential') || cond.includes('shower');
  const isRain = (cond.includes('rain') || cond.includes('drizzle')) && !isHeavyRain && !isThunder;
  const isSnow = cond.includes('snow') || cond.includes('sleet') || cond.includes('ice') || cond.includes('flurry');
  const isFog = cond.includes('fog') || cond.includes('mist') || cond.includes('haze');
  const isCloudy = (cond.includes('cloud') || cond.includes('overcast')) && !isPartlyCloudy && !isRain && !isHeavyRain && !isThunder && !isSnow;

  return (
    <View style={[{ width: size, height: size }, styles.center]}>
      {isClear && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.45,
              height: size * 1.45,
              borderRadius: (size * 1.45) / 2,
              backgroundColor: 'rgba(254, 243, 199, 0.45)',
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: size * 1.12,
              height: size * 1.12,
              borderRadius: (size * 1.12) / 2,
              backgroundColor: 'rgba(253, 230, 138, 0.55)',
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: size * 0.82,
              height: size * 0.82,
              borderRadius: (size * 0.82) / 2,
              backgroundColor: 'rgba(252, 211, 77, 0.65)',
            }}
          />
          <View
            style={{
              width: size * 0.52,
              height: size * 0.52,
              borderRadius: (size * 0.52) / 2,
              backgroundColor: '#FBBF24',
              elevation: 3,
              shadowColor: '#FBBF24',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
            }}
          />
        </View>
      )}

      {isPartlyCloudy && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.3,
              height: size * 1.3,
              borderRadius: (size * 1.3) / 2,
              backgroundColor: 'rgba(254, 243, 199, 0.35)',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: size * 0.1,
              right: size * 0.16,
              width: size * 0.45,
              height: size * 0.45,
              borderRadius: (size * 0.45) / 2,
              backgroundColor: '#FBBF24',
              elevation: 2,
              shadowColor: '#FBBF24',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
          />
          <View style={{ width: size * 0.85, height: size * 0.55, position: 'absolute', bottom: size * 0.1 }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.8,
                height: size * 0.36,
                borderRadius: size * 0.18,
                backgroundColor: '#CBD5E1',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.1,
                left: size * 0.1,
                width: size * 0.4,
                height: size * 0.4,
                borderRadius: size * 0.2,
                backgroundColor: '#E2E8F0',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                left: size * 0.36,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#FFFFFF',
                shadowColor: '#64748B',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
              }}
            />
          </View>
        </View>
      )}

      {isCloudy && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.25,
              height: size * 1.25,
              borderRadius: (size * 1.25) / 2,
              backgroundColor: 'rgba(226, 232, 240, 0.45)',
            }}
          />
          <View style={{ width: size * 0.88, height: size * 0.58, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.04,
                left: size * 0.04,
                width: size * 0.72,
                height: size * 0.34,
                borderRadius: size * 0.17,
                backgroundColor: '#94A3B8',
                opacity: 0.8,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.84,
                height: size * 0.36,
                borderRadius: size * 0.18,
                backgroundColor: '#CBD5E1',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                left: size * 0.12,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#E2E8F0',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.14,
                right: size * 0.12,
                width: size * 0.46,
                height: size * 0.46,
                borderRadius: size * 0.23,
                backgroundColor: '#FFFFFF',
                shadowColor: '#475569',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.12,
                shadowRadius: 6,
                elevation: 3,
              }}
            />
          </View>
        </View>
      )}

      {isRain && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.3,
              height: size * 1.3,
              borderRadius: (size * 1.3) / 2,
              backgroundColor: 'rgba(186, 230, 253, 0.4)',
            }}
          />
          <View style={{ width: size * 0.85, height: size * 0.5, position: 'absolute', top: size * 0.12 }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.8,
                height: size * 0.34,
                borderRadius: size * 0.17,
                backgroundColor: '#64748B',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.1,
                left: size * 0.1,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#94A3B8',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                right: size * 0.12,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#CBD5E1',
              }}
            />
          </View>
          <View style={styles.rainRow}>
            <View style={[styles.rainDrop, { height: size * 0.16 }]} />
            <View style={[styles.rainDrop, { height: size * 0.2, marginTop: 4 }]} />
            <View style={[styles.rainDrop, { height: size * 0.15 }]} />
            <View style={[styles.rainDrop, { height: size * 0.18, marginTop: 2 }]} />
          </View>
        </View>
      )}

      {isHeavyRain && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.3,
              height: size * 1.3,
              borderRadius: (size * 1.3) / 2,
              backgroundColor: 'rgba(125, 211, 252, 0.45)',
            }}
          />
          <View style={{ width: size * 0.88, height: size * 0.52, position: 'absolute', top: size * 0.1 }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.84,
                height: size * 0.36,
                borderRadius: size * 0.18,
                backgroundColor: '#475569',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.1,
                left: size * 0.1,
                width: size * 0.44,
                height: size * 0.44,
                borderRadius: size * 0.22,
                backgroundColor: '#64748B',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                right: size * 0.12,
                width: size * 0.44,
                height: size * 0.44,
                borderRadius: size * 0.22,
                backgroundColor: '#94A3B8',
              }}
            />
          </View>
          <View style={styles.rainRow}>
            <View style={[styles.rainDrop, { height: size * 0.22, backgroundColor: '#0284C7' }]} />
            <View style={[styles.rainDrop, { height: size * 0.26, marginTop: 6, backgroundColor: '#0369A1' }]} />
            <View style={[styles.rainDrop, { height: size * 0.2, backgroundColor: '#0284C7' }]} />
            <View style={[styles.rainDrop, { height: size * 0.24, marginTop: 3, backgroundColor: '#0369A1' }]} />
            <View style={[styles.rainDrop, { height: size * 0.18, backgroundColor: '#0284C7' }]} />
          </View>
        </View>
      )}

      {isThunder && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.35,
              height: size * 1.35,
              borderRadius: (size * 1.35) / 2,
              backgroundColor: 'rgba(224, 231, 255, 0.5)',
            }}
          />
          <View style={{ width: size * 0.88, height: size * 0.52, position: 'absolute', top: size * 0.08 }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.84,
                height: size * 0.36,
                borderRadius: size * 0.18,
                backgroundColor: '#334155',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.1,
                left: size * 0.1,
                width: size * 0.46,
                height: size * 0.46,
                borderRadius: size * 0.23,
                backgroundColor: '#475569',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                right: size * 0.12,
                width: size * 0.44,
                height: size * 0.44,
                borderRadius: size * 0.22,
                backgroundColor: '#64748B',
              }}
            />
          </View>
          <View style={styles.lightningBolt}>
            <View
              style={{
                width: 4,
                height: 14,
                backgroundColor: '#FBBF24',
                transform: [{ rotate: '25deg' }],
              }}
            />
            <View
              style={{
                width: 4,
                height: 12,
                backgroundColor: '#F59E0B',
                transform: [{ rotate: '25deg' }],
                marginTop: -4,
                marginLeft: 3,
              }}
            />
          </View>
          <View style={styles.rainRow}>
            <View style={[styles.rainDrop, { height: size * 0.18 }]} />
            <View style={[styles.rainDrop, { height: size * 0.2, marginTop: 4 }]} />
            <View style={[styles.rainDrop, { height: size * 0.16 }]} />
          </View>
        </View>
      )}

      {isSnow && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.3,
              height: size * 1.3,
              borderRadius: (size * 1.3) / 2,
              backgroundColor: 'rgba(240, 249, 255, 0.6)',
            }}
          />
          <View style={{ width: size * 0.84, height: size * 0.5, position: 'absolute', top: size * 0.1 }}>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: size * 0.8,
                height: size * 0.34,
                borderRadius: size * 0.17,
                backgroundColor: '#94A3B8',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.1,
                left: size * 0.1,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#CBD5E1',
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: size * 0.12,
                right: size * 0.12,
                width: size * 0.42,
                height: size * 0.42,
                borderRadius: size * 0.21,
                backgroundColor: '#FFFFFF',
              }}
            />
          </View>
          <View style={styles.snowRow}>
            <View style={styles.snowDot} />
            <View style={[styles.snowDot, { marginTop: 6 }]} />
            <View style={styles.snowDot} />
            <View style={[styles.snowDot, { marginTop: 4 }]} />
          </View>
        </View>
      )}

      {isFog && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.3,
              height: size * 1.3,
              borderRadius: (size * 1.3) / 2,
              backgroundColor: 'rgba(241, 245, 249, 0.7)',
            }}
          />
          <View style={styles.mistContainer}>
            <View style={[styles.mistCapsule, { width: size * 0.75, backgroundColor: '#CBD5E1' }]} />
            <View style={[styles.mistCapsule, { width: size * 0.85, backgroundColor: '#94A3B8', marginTop: 8 }]} />
            <View style={[styles.mistCapsule, { width: size * 0.65, backgroundColor: '#E2E8F0', marginTop: 8 }]} />
          </View>
        </View>
      )}

      {!isClear && !isPartlyCloudy && !isCloudy && !isRain && !isHeavyRain && !isThunder && !isSnow && !isFog && (
        <View style={[styles.center, { width: size, height: size }]}>
          <View
            style={{
              position: 'absolute',
              width: size * 1.35,
              height: size * 1.35,
              borderRadius: (size * 1.35) / 2,
              backgroundColor: 'rgba(254, 243, 199, 0.45)',
            }}
          />
          <View
            style={{
              width: size * 0.5,
              height: size * 0.5,
              borderRadius: (size * 0.5) / 2,
              backgroundColor: '#FBBF24',
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rainRow: {
    position: 'absolute',
    bottom: 4,
    flexDirection: 'row',
    gap: 8,
  },
  rainDrop: {
    width: 2.5,
    backgroundColor: '#0284C7',
    borderRadius: 1.25,
  },
  lightningBolt: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  snowRow: {
    position: 'absolute',
    bottom: 6,
    flexDirection: 'row',
    gap: 10,
  },
  snowDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38BDF8',
  },
  mistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mistCapsule: {
    height: 6,
    borderRadius: 3,
    opacity: 0.85,
  },
});
export default WeatherIllustration;
