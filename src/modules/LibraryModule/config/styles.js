import {StyleSheet, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'

export const styles = EStyleSheet.create({
  wrapper: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#ccc'
  },
  header: {
    flex: 1,
    alignItems: 'center'
  },
  headerContent: {
    position: 'absolute',
    bottom: 10,
    width: '90%'
  },
  backgroundOverlay: {
    width:'100%',
    height:'100%',
    alignItems: 'center',
    zIndex:0
  },
  logo: {
    flex:1, 
    height: undefined, 
    width: undefined,
  },
  body: {
  	flex:2,
	position:'relative',
	backgroundColor: '#ccc',
	alignItems: 'center'
  },
  loginContainer: {
	  flex:1,
	  position:'relative',
	  top: 10,
	  width: '90%'
  },
  loginForm: {
    width: (Dimensions.get('window').width * 0.9),
    backgroundColor: '$white',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 2
  },
  textInputView: {
    zIndex:2,
    width: '100%',
  },
  textInput: {
    borderColor: 'orange', 
    borderWidth: 1,
    padding:5,
    paddingLeft: 8,
    paddingRight: 8
  },
  logInBtn: {
    alignItems: 'center',
    backgroundColor: '$orange',
    padding: 10,
  },
    logOutBtn: {
    marginTop: 20,
    marginBottom: 12,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#999',
    alignItems: 'center',
    padding: 6,
    borderRadius: 3
  },
    logOutBtnText : {
    color: '#999',
    fontWeight: 'bold'
  }

});
