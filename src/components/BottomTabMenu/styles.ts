import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    borderTopColor: '#CCCCCC',
    marginBottom: 70,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  tabIcon: {
    width: 28,
    height: 28,
    marginBottom: 5,
    tintColor: 'black',
  },
  tabLabel: {
    fontSize: 15,
    color: 'black',
  },
});

export default styles;
