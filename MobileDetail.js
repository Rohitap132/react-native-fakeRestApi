import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import ItemSection from './ItemSection';

export default function MobileDetail({ route }) {
  const { name, price, description, image, url } = route.params;

  const openBrowser = () => {
    Linking.openURL(url);
  };

  return (
    <View>
      <ItemSection>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </ItemSection>
      <ItemSection>
        <Image source={{ uri: image }} style={styles.image} />
      </ItemSection>
      <ItemSection>
        <Text>{description}</Text>
      </ItemSection>
      <ItemSection>
        <Button title="Buy Now" onPress={openBrowser} />
      </ItemSection>
    </View>
  );
}

const styles = {
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
};
