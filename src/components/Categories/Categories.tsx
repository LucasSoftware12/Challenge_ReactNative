import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={{color: 'black'}}>Categorías más </Text>
        <Text style={{color: '#0500FF'}}>visitadas</Text>
      </Text>
      <Text style={styles.description}>
        Descubre lo último en tecnología con nuestras categorías más populares.
        Encuentra lo que buscas en electrónica, informática y más.
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Ver todas las categorías</Text>
        <Icon
          name="chevron-right"
          size={15}
          color="#0500FF"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Categories;
