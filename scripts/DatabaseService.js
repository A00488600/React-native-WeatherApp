import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('weatherapp.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS saved_locations (id INTEGER PRIMARY KEY AUTOINCREMENT, city TEXT);`,
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.error('Error creating table:', error)
    );
  });
};

export const saveLocation = (city) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO saved_locations (city) VALUES (?);`,
      [city],
      (_, result) => console.log('Location saved:', result),
      (_, error) => console.error('Error saving location:', error)
    );
  });
};

export const getSavedLocations = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM saved_locations;`,
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.error('Error retrieving locations:', error)
    );
  });
};
