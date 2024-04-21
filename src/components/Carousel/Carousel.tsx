import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

const {width: screenWidth} = Dimensions.get('window');

const CarrouselComponent = () => {
  const data = [
    {
      imageUrl: require('../../assets/mockupcategories.png'),
      title: 'Category name',
      description: '20 productos',
    },
    {
      imageUrl: require('../../assets/mockupteclado.png'),
      title: 'Category name',
      description: '20 productos',
    },
    {
      imageUrl: require('../../assets/mockupsilla.png'),
      title: 'Category name',
      description: '20 productos',
    },
  ];

  const onItemPress = (title: string) => {
    console.log(`Item Pressed: ${title}`);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        style={[styles.slide]}
        onPress={() => onItemPress(item.title)}>
        <ImageBackground source={item.imageUrl} style={styles.imageBackground}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      layout="default"
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.8}
      inactiveSlideScale={0.9}
      inactiveSlideOpacity={1}
      firstItem={0}
    />
  );
};

export default CarrouselComponent;
