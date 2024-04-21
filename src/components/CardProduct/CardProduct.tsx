import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CardProductProps {
  imageUri: any;
  productName: string;
  description: string;
  price: number;
  discount?: string;
  oldPrice?: number;
  onPress?: () => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  imageUri,
  productName,
  description,
  price,
  discount,
  oldPrice,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground source={imageUri} style={styles.image}>
        <View style={styles.overlay}>
          {discount && (
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>{discount}</Text>
            </View>
          )}

          <View style={styles.priceContainer}>
            {oldPrice && (
              <Text style={styles.oldPrice}>${oldPrice.toFixed(2)}</Text>
            )}
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{productName}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;
