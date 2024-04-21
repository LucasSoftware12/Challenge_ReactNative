import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="menu" size={30} color="#000000" />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../assets/logo.png')}
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Image
          source={require('../../assets/logouticon.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  title: {
    color: '#000000',
    fontSize: 20,
  },
  image: {
    width: 140,
    height: 140,
  },
});

export default Header;
