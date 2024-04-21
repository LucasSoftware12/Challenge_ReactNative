import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const homeIcon = require('../../assets/homeicon.png');
const cartIcon = require('../../assets/carticon.png');
const favoritesIcon = require('../../assets/favoritesicon.png');
const storeIcon = require('../../assets/storeicon.png');

const BottomTabMenu = () => {
  return (
    <View style={styles.container}>
      <TabIcon icon={homeIcon} label="Home" />
      <TabIcon icon={cartIcon} label="Carrito" />
      <TabIcon icon={favoritesIcon} label="Favoritos" />
      <TabIcon icon={storeIcon} label="Tienda" />
    </View>
  );
};

const TabIcon = ({icon, label}) => {
  const handlePress = () => {
    console.log(`Pestaña "${label}" presionada`);
  };

  return (
    <TouchableOpacity style={styles.tab} onPress={handlePress}>
      <Image source={icon} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BottomTabMenu;
