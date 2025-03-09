import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CurrentWeatherScreen from '../app/CurrentWeatherScreen';
import SearchWeatherScreen from '../app/SearchWeatherScreen';
import SavedLocationsScreen from '../app/SavedLocationsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current Weather" component={CurrentWeatherScreen} />
        <Tab.Screen name="Search" component={SearchWeatherScreen} />
        <Tab.Screen name="Saved Locations" component={SavedLocationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
