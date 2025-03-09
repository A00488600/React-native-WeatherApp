import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getSavedLocations, deleteLocation } from '../scripts/DatabaseService';

export default function SavedLocationsScreen() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getSavedLocations(setLocations);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => deleteLocation(item.id, setLocations)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
});
