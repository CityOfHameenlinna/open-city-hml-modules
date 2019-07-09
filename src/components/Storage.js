/* @flow */
import { AsyncStorage } from 'react-native';
import { showAlert } from 'LibraryModule/src/components/Alert';
  
  // Receives a key name and a value 
  // Stores key and value as a key-value pair  
   export async function setItemAsync (key : string, value : any) {
    try {
      await AsyncStorage.setItem(key, value);
    }
    catch (error) {
      showAlert('Error', error.message);
    }
  }

  // Receives a name of a key 
  // Returns a value of that key if there is a value stored
  export async function getItemAsync (key: string) {
    try {
      let value = await AsyncStorage.getItem(key);
      if (value != null) {
        return value;
      }
    }
    catch (error) {
      showAlert('Error', error.message);
    }
  }

  // Receives a name of a key
  // Remove the value of that key from storage if there is a value stored 
 export async function removeItemAsync (key: string) {
    try {
      AsyncStorage.removeItem(key);
    }
    catch (error) {
      showAlert('Error', error.message);
    }
  } 