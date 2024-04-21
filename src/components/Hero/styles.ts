import {StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 640,
  },
  textContainer: {
    position: 'absolute',
    bottom: 100,
    left: 10,
    padding: 10,
    borderRadius: 5,
    width: screenWidth - 80,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0500FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    fontFamily: 'Raleway',
  },
  buttonIcon: {
    paddingLeft: 25,
  },
});

export default styles;
