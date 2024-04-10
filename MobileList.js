import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MobileList() {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Rohitap132/react-native-cli/db')
      .then(response => {
        setGadgets(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View>
      <Text style={styles.title}>Mobile Gadgets</Text>
      <FlatList
        data={gadgets}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
