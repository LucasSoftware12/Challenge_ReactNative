import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    width: '50%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 10,
  },
  discountContainer: {
    backgroundColor: '#0500FF',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    width: 60,
    height: 25,
  },
  discountText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  oldPrice: {
    fontSize: 18,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color: 'red',
    backgroundColor: 'white',
    paddingRight: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
    backgroundColor: 'white',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'normal',
    marginBottom: 5,
    color: '#000000',
    fontFamily: 'Raleway',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: '#6B7280',
  },
});

export default styles;
