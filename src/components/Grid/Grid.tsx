import React from 'react';
import {View} from 'react-native';
import CardProduct from '../CardProduct/CardProduct';
import styles from './styles';

const ProductData = [
  {
    imageUri: require('../../assets/product2.png'),
    productName: 'Product name here',
    description: 'Club-categoría',
    price: 2800,
  },
  {
    imageUri: require('../../assets/product1.png'),
    productName: 'Product name here',
    description: 'Club-categoría',
    price: 2800,
    discount: '-30%',
    oldPrice: 2600,
  },
  {
    imageUri: require('../../assets/product2.png'),
    productName: 'Product name here',
    description: 'Club-categoría',
    price: 2800,
  },
  {
    imageUri: require('../../assets/product1.png'),
    productName: 'Product name here',
    description: 'Club-categoría',
    price: 2800,
  },
];

const Grid = () => {
  return (
    <View style={styles.container}>
      {ProductData.map((product, index) => (
        <CardProduct
          key={index}
          imageUri={product.imageUri}
          productName={product.productName}
          description={product.description}
          price={product.price}
          discount={product.discount}
          oldPrice={product.oldPrice}
        />
      ))}
    </View>
  );
};

export default Grid;
