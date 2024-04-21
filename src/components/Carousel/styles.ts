import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -22,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    marginBottom: 2,
    fontFamily: 'Raleway',
  },
  description: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Raleway',
  },
});

export default styles;
