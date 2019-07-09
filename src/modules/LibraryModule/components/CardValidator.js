/* @flow */
import React from 'react';

import {sendRequest} from './Fetch';
import {getPropertyValue} from 'LibraryModule/src/components/XmlParser';
import {library} from '../config/auth';


export const retrieveUserInformation = (number: string, pin: string) => {

  if (number.trim() === '' || pin.trim() === '') {
    throw Error('Kortin numero ja tunnusluku on pakko täyttää');
  }

  try {
    return sendRequest(library.url + library.username + number + library.password + pin)
    .then((response) => {

        let info = {
          status: getPropertyValue(response, 'Status').toLowerCase(),
          name: getPropertyValue(response, 'Name'),
        };

        switch (info.status) {
          // Authentication was successful
          case 'ok':
            return info;
          // Username and password were incorrect
          case 'wrongbarcodeorpin':
            return 'Antamissasi tiedoissa oli virhe';
          // Username or password were incorrect
          case "missingpwd":
            return 'Antamissasi tiedoissa oli virhe';
        }
    })
  }
  catch (error) {
    return error;
  }
}
