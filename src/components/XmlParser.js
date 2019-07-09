/* @flow */
import React from 'react';
import {parseString} from 'react-native-xml2js';

// Receives a xml as a string
// Converts xml into json format and returns it
export function xmlToJson(xml: string) {

    if (xml === null ||  xml.trim() === '' || typeof xml === 'undefined') {
        throw new Error('Unable to parse response with parameters that are null or undefined');
    }

    let value = '';

    parseString(xml, {explicitRoot: false}, (err, result) => {
        if (err != null) {
            throw err;
        }
        if (result != null ) {
        value = result
        }
    })

    return value;

}

// Receives a xml and property name as a string 
// Converts xml string into json format
// Returns value of the proprety
export function getPropertyValue(xml: string, property: string) {

    if (xml === null ||  xml.trim() === '' || typeof xml === 'undefined') {
        throw new Error('Unable to parse response with parameters that are null or undefined');
    }

    let value = '';

    parseString(xml, {explicitRoot: false}, (err, result) => {
        if (err != null) {
            throw err;
        }
        if (result != null ) {
        value = result[property][0]
        }
    })

    return value;
}