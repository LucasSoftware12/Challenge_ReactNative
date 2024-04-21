import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Hero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/background.png')}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Conecta tu mundo con la tecnología más avanzada
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Ver productos</Text>
            <Icon
              name="chevron-right"
              size={15}
              color="white"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Hero;
