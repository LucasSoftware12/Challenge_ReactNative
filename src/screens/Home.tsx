import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Categories from '../components/Categories/Categories';
import CarouselComponent from '../components/Carousel/Carousel';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Grid from '../components/Grid/Grid';
import BottomTabMenu from '../components/BottomTabMenu/BottomTabMenu';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Hero />
        <Categories />
        <CarouselComponent />
        <FeaturedProducts />
        <Grid />
        <BottomTabMenu />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
