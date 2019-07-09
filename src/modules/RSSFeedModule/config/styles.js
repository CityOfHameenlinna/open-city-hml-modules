import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBg: {
    height: (Dimensions.get('window').height * 0.3)
  },
  backgroundOverlay: {
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    position: 'absolute',
    bottom: 0,
    margin: 10
  },
  item: {
    flex:1,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
    minHeight: 100,
    maxHeight: 100,
    backgroundColor: '#f5f5f5'
  },
  listItem: {
    backgroundColor: '#f5f5f5'  
  },
  title: {
    fontSize: 18,
  },
  text: {
    marginBottom: 2,
    fontSize: 12,
  },
});