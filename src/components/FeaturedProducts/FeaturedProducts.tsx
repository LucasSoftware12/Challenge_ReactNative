import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const FeaturedProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Productos {'\n'}
        <Text style={styles.highlighted}>destacados</Text>
      </Text>
      <Text style={styles.description}>
        ¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología
        y accesorios para simplificar tu vida.
      </Text>
      <View style={styles.productsContainer}></View>
    </View>
  );
};

export default FeaturedProducts;
