/* @flow */
import React from 'react';

/*
This fuction sends request to an url it receives as parameter. After receiving a response, a response code is checked.
If response is ok - code 200 -, response content type is checked to see if response is json or xml.
If response is json then function returns it as a json array, otherwise response will be returned in string - text - format.
*/
export const sendRequest = (url: string) => {

  return fetch(url, {
    headers: new Headers({})
  })
    .then((response) => {
      switch (response.status) {
        case 200:
          let contentType = response.headers.get('Content-Type')
          if (contentType === 'application/json; charset=utf-8' ) {
            return response.json();
          }
          else {
            return response.text();
          }
        case 400:
          throw new Error('Bad Request. The request cannot be fulfilled');
        
        case 401:
          throw new Error('Unauthorized. Authentication is required and has failed or has not yet been provided');
        
        case 403:
          throw new Error('Forbidden. The request was valid, but the server is refusing action');
        
        case 404:
          throw new Error('Not Found. The requested resource could not be found');

        case 500:
          throw new Error('Internal Server Error. The server failed to fulfill the request');

        default:
         // Return generic error message if response status were not included in cases
          throw new Error('The service responded with status code: ' + response.status);
      }
    })
    .catch((error) => {
      throw error.message;
    })
  }
