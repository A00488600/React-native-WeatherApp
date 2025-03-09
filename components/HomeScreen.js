import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';

const HomeScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const apiKey = '162f3d4ba2549e48d199b3a4c40af5a0'; // Replace with your API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  const getLocationAndFetchWeather = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}&units=metric`
    );

    setWeather(response.data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={() => fetchWeather(city)} />
      <Button title="Use My Location" onPress={getLocationAndFetchWeather} />

      {error && <Text style={styles.error}>{error}</Text>}

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>City: {weather.name}</Text>
          <Text style={styles.weatherText}>Temperature: {weather.main.temp}°C</Text>
          <Text style={styles.weatherText}>Condition: {weather.weather[0].description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
  weatherContainer: { marginTop: 20, alignItems: 'center' },
  weatherText: { fontSize: 18, marginBottom: 5 },
  error: { color: 'red', marginTop: 10 },
});

export default HomeScreen;
