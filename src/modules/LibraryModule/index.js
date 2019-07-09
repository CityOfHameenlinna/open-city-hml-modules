/* @flow */
import React from 'react';
import {
  Platform, StyleSheet,
  Text, View, ScrollView,
  TouchableHighlight,
  ActivityIndicator, TextInput, Image, ImageBackground,
  KeyboardAvoidingView, Linking, Dimensions
} from 'react-native';

import BarcodeView from './components/BarcodeView';
import {sendRequest} from './components/Fetch';
import {retrieveUserInformation} from './components/CardValidator';
import {styles} from './config/styles';
import * as ItemStorage from 'LibraryModule/src/components/Storage';
import { showAlert } from 'LibraryModule/src/components/Alert';

// $FlowFixMe
import BgImg from 'LibraryModule/assets/img/kirjasto_bg.jpeg';
import OCAStyles from 'LibraryModule/OCAStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = { };

type State = {
    showLogIn: boolean,
    showBarcode: boolean,
    isLoading: boolean,
    cardNumber: string,
    pinCode: string,
    cardOwner: string,
  };

export default class LibraryModule extends React.Component<Props, State> {

// Class constructor with states
  constructor(props: Props){
    super(props);

    this.state = {
      showLogIn: false,
      showBarcode: false,
      isLoading: true,
      cardNumber: '',
      pinCode: '',
      cardOwner: '',
    };
  }

  /*
  Validate user's card number by calling validateCardnumber() in Validate.js 
  Receives result that contains ok - authentication successful - or an error message 
  */
  validateCardnumber = () => {
    try {
      this.setState({showLogIn: false, isLoading: true})
      retrieveUserInformation(this.state.cardNumber, this.state.pinCode)
      .then((result: any) => {
        if (result.status === 'ok') {
          this.setState({cardOwner: result.name, showBarcode: true, isLoading: false});
          // Store barcode so that it can be used even after restart
          ItemStorage.setItemAsync('cardNumber', this.state.cardNumber)
          ItemStorage.setItemAsync('cardOwner', result.name)
        }
        else {
          this.setState({showLogIn: true, isLoading: false});
          showAlert('Virhe', result);
        }
      })
    }
    catch (error) {
      this.setState({showLogIn: true, isLoading: false});
      showAlert('Virhe', error.message);
    }
  }

  // "Log out" user by removing value of the barcode
  removeBarcode = () => {
    this.setState({showBarcode: false, isLoading: true})
    try {
      ItemStorage.removeItemAsync('cardOwner')
      ItemStorage.removeItemAsync('cardNumber')
      this.setState({cardOwner: '', cardNumber: '', showLogIn: true, isLoading: false});
    }
    catch (error) {
      this.setState({isLoading: false});
      showAlert('Virhe', error.message);
    }
  }

componentDidMount() {
  // Is there already cardNumber saved in storage
	ItemStorage.getItemAsync('cardOwner')
	.then ((result) => {
    if (result != null) {
      this.setState({cardOwner: result})
		  ItemStorage.getItemAsync('cardNumber')
	    .then ((result) => {
		    if (result != null) {
			    this.setState({cardNumber: result, showBarcode: true, isLoading: false})
		    }
		    else {
			    this.setState({showLogIn: true, isLoading: false})
		    }
	    });
    }
    else {
			this.setState({showLogIn: true, isLoading: false})
    }
	});
}

  render(){
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').height;
    return(
      <ScrollView>
      <KeyboardAvoidingView style={styles.wrapper, {marginBottom: 20}}>
      	<ImageBackground style={styles.header, {height: windowHeight * 0.5}} source={BgImg} blurRadius={2} resizeMode='cover'>
		<View style={[styles.backgroundOverlay, OCAStyles.opacityBlue]}>

			<View style={[styles.headerContent]}>

        
                {!this.state.showBarcode ?
        
	          	<View>
                    <Text style={[OCAStyles.heading, OCAStyles.h1]}>Kirjaudu</Text>
		  		    <Text style={[OCAStyles.whiteText, OCAStyles.padding20_0]}>Sovelluksen sähköistä korttia voit käyttää Hämeenlinnan kirjastoissa.</Text>
                </View>
                :
                <View>
                    <Text style={[OCAStyles.heading, OCAStyles.h1]}>Hei, tässä on kirjastokorttisi</Text>
		  		  <Text style={[OCAStyles.whiteText, OCAStyles.padding20_0]}>Sovelluksen sähköistä korttia voit käyttää Hämeenlinnan kirjastoissa.</Text>
	            </View>
                }
            </View>

	     </View>
	</ImageBackground>

        <View style={[styles.body, OCAStyles.lightGreyBackground]}>
          {/* Show Login view if state showLogIn is true. */}
          {
          this.state.showLogIn &&

	  <View style={styles.loginContainer}>


          <View style={styles.loginForm}>
            {/* Text input for card number */}
            <View style={[styles.textInputView]}>
              <TextInput underlineColorAndroid='transparent' style={[styles.textInput, OCAStyles.input, OCAStyles.margin10_0, OCAStyles.textCentered]}
                onChangeText={(cardNumber) => this.setState({cardNumber: cardNumber})} placeholder='Kortin numero' />
            </View>

            {/* Text input for pin code */}
            <View style={[styles.textInputView]}>
              <TextInput underlineColorAndroid='transparent' style={[styles.textInput, OCAStyles.input, OCAStyles.margin10_0, OCAStyles.textCentered]}
                secureTextEntry={true}
                onChangeText={(pinCode) => this.setState({pinCode: pinCode})} placeholder='Tunnusluku' keyboardType='numeric' maxLength={10} />
            </View>

          </View>

		            {/* Login button */}
  				<View style={{width: '100%', marginTop: 25, marginBottom: 20}}>
  					<TouchableHighlight style={[OCAStyles.button, OCAStyles.buttonSubmit, OCAStyles.buttonMedium, OCAStyles.fullWidth]} onPress={this.validateCardnumber}>
  						<Text style={[OCAStyles.buttonText, OCAStyles.textCentered]}>Kirjaudu sisään</Text>
			  		</TouchableHighlight>
  				</View>

	  </View>
          }

          {/* Show loading indicator and text if state isLoading is true */}
          { this.state.isLoading ?
            <View>
              <ActivityIndicator/>
              <Text>Ladataan ...</Text>
            </View>
            :
            null
          }

          {/* Show barcode if state showBarcode is true */}
          {
            this.state.showBarcode ?
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <Text style={{marginTop: 8, marginBottom: 8, fontWeight: 'bold', color: '#000', fontSize: 18}}>{this.state.cardOwner}</Text>
                    <View style={{windth: '80%'}}>
                    <BarcodeView barcodeText={this.state.cardNumber} barcodeValue={this.state.cardNumber} />
                    </View>
                </View>
            
                <TouchableHighlight style={styles.logOutBtn} onPress={this.removeBarcode}>
	               	<Text style={[styles.logOutBtnText]}>{'Peru sähköinen kortti'.toUpperCase()}</Text>
       		   </TouchableHighlight>
            
               <TouchableHighlight style={[OCAStyles.button, OCAStyles.buttonMedium, OCAStyles.buttonSubmit, OCAStyles.XbottomPositioned]} onPress={() => Linking.openURL('https://www.vanamokirjastot.fi')}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}} >Vanamo-verkkokirjasto</Text>
                        <Icon style={{marginLeft: 10}} name="arrow-right" size={20} color="#fff" />
                    </View>
                </TouchableHighlight>
            
            </View>
            :
            null
          }
        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
