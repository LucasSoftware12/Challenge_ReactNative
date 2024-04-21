import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Raleway',
  },
  description: {
    marginBottom: 20,
    color: '#6B7280',
    fontSize: 22,
    fontFamily: 'Raleway',
    lineHeight: 30,
    fontWeight: 'normal',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingBottom: 15,
    paddingTop: 15,
  },
  buttonText: {
    color: '#0500FF',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default styles;
