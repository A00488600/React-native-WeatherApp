import { WEATHER_API_BASE_URL, GEOCODING_API_BASE_URL } from '../constants/ApiConfig';

export async function fetchWeather(lat, lon, setWeather) {
  try {
    const response = await fetch(`${WEATHER_API_BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await response.json();
    setWeather(data.current_weather);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchWeatherByCity(city, setWeather, alertFn) {
  try {
    const response = await fetch(`${GEOCODING_API_BASE_URL}?name=${city}&count=1`);
    const geoData = await response.json();
    if (geoData.results && geoData.results.length > 0) {
      const { latitude, longitude } = geoData.results[0];
      fetchWeather(latitude, longitude, setWeather);
    } else {
      alertFn('City not found');
    }
  } catch (error) {
    console.error(error);
  }
}
