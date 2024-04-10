import React from 'react';
import { View, Text } from 'react-native';

export default function MobileDetail({ route }) {
  const { name, price, description } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Price: {price}</Text>
      <Text>Description: {description}</Text>
    </View>
  );
}
