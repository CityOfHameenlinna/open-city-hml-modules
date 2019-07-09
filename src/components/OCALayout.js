import React, {Component} from 'react';
import {Text,ScrollView, View, ImageBackground, Dimensions, StatusBar} from 'react-native';

import OCAHeader from './OCAHeader.js';
import OCAContent from './OCAContent.js';
import OCAFooter from './OCAFooter.js';
import ContentBlock from './OCAContentBlock.js';

import OCAStyles from './OCAStyles.js';

function OCAScreenSpecs() {

    return {
        'ratio' : (Dimensions.get('window').height / 1000),
        'statusbar': StatusBar.currentHeight,
        'height': Dimensions.get('window').height
    }

}

class OCALayout extends React.Component<Props, State>{

    
    showContentWithBackground() {
        
        if (this.props.backgroundImage) {

            return (
                <ImageBackground source={this.props.backgroundImage} style={[{width: '100%', height: (Dimensions.get('window').height - StatusBar.currentHeight)}]}>
                    {this.props.children}
                </ImageBackground>
            )

        } else {

            return this.props.children;
            
        }

    }

    render() {

        return (
            <ScrollView style={[this.props.style, OCAStyles.OCALayout]} contentContainerStyle={[this.props.contentContainerStyle, OCAStyles.cCSBody]}>
                {this.showContentWithBackground()}
            </ScrollView>
        );

    }

}

export { OCALayout, OCAHeader, OCAContent, OCAFooter, ContentBlock, OCAScreenSpecs }