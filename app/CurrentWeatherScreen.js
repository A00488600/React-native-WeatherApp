import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { fetchWeather } from '../scripts/WeatherService';

export default function CurrentWeatherScreen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied for location access');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      fetchWeather(location.coords.latitude, location.coords.longitude, setWeather);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {weather ? (
        <Text style={styles.text}>Temperature: {weather.temperature}°C</Text>
      ) : (
        <Text style={styles.text}>Fetching weather...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});
