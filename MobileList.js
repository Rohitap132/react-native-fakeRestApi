import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default function MobileList() {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/your-username/your-repo-name/gadgets')
      .then(response => {
        setGadgets(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={gadgets}
        renderItem={({ item }) => (
          <Item name={item.name} price={item.price} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
