import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class OCAFooter extends React.Component<Props, State>{

    render() {

        return (

            <View style={this.props.style}>
                {this.props.children}
            </View>

        );

    }

}