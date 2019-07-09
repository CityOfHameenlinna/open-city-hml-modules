import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';

import BgImg from "LibraryModule/assets/img/splash--tiedotteet-bg.jpg";

import OCAStyles from './OCAStyles.js';

export default class OCAHeader extends React.Component<Props, State>{

    layerStyle () {
        
        if (!this.props.overlayStyle) {
        
            return {};
       
        } else {

            return this.props.overlayStyle;

        }

    }

    backgroundImage() {

        if (!this.props.backgroundImage) {
            
            return require('LibraryModule/assets/img/noimage.png');
            
        } else {
            
            return this.props.backgroundImage;

        }

    }

    render() {

        return (

                <ImageBackground source={this.backgroundImage()} style={[this.props.style, OCAStyles.OCAHeader]}>
                    <View style={this.layerStyle()}>
                        {this.props.children}
                    </View>
                </ImageBackground>

        );

    }

}