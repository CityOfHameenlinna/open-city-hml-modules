/* @flow */
import { Alert } from 'react-native';

// Displays an alert dialog  
export function showAlert (title: string, msg: string) {
    Alert.alert(title, msg,
        [
        {text: 'Ok'},
        ],
        { 
          cancelable: false 
        }
    );
} 