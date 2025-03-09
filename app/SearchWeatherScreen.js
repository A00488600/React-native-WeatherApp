import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { fetchWeatherByCity } from '../scripts/WeatherService';
import { saveLocation } from '../scripts/DatabaseService';

export default function SearchWeatherScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter city name" value={city} onChangeText={setCity} />
      <Button title="Get Weather" onPress={() => fetchWeatherByCity(city, setWeather, Alert)} />
      {weather && <Text style={styles.text}>Temperature: {weather.temperature}°C</Text>}
      <Button title="Save Location" onPress={() => saveLocation(city)} disabled={!weather} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, width: '80%', padding: 10, marginBottom: 10 },
  text: { fontSize: 20 },
});
