import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F7FC" />
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
});

export default App;
