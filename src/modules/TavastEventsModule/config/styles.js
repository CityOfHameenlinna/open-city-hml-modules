import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
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
    maxHeight: 100
  },
  avatar: {
    position: 'relative',
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50
  },
  title: {
    fontSize: 14,
  },
  text: {
    marginBottom: 2,
    fontSize: 12,
  },
  contentBox: {
      flex: 3,
      backgroundColor: '#f6f8fa',
      marginBottom: 20,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
  content: {
      width: '90%',
      padding: 10,
      marginTop: 12,
      marginBottom: 22
  }
});