import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    color: '#000000',
  },
  highlighted: {
    color: '#0500FF',
    fontSize: 38,
  },
  description: {
    fontSize: 21,
    fontFamily: 'Raleway',
    marginTop: 15,
    color: '#6B7280',
    lineHeight: 30,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default styles;
