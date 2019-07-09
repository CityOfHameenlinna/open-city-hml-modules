/* @flow */
import React, { Component } from 'react';
import Barcode from 'react-native-barcode-builder';

type Props = {
  barcodeValue: string,
  barcodeText: string,
};

// This class returns Barcode component which receives it's value and text from it's caller
export default class BarcodeView extends Component<Props> {
  render() {
    return (
      <Barcode value={this.props.barcodeValue} format="CODE128"
      width={1.5} height={100} text={this.props.barcodeText} lineColor='#1e3250'
      background='#fff'/>
    );
  }
}
