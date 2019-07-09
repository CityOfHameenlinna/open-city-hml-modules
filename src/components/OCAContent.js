import React, {Component} from 'react';
import {Text, View} from 'react-native';

import OCAStyles from './OCAStyles.js';

export default class OCAContent extends React.Component<Props, State>{

    render() {

        return (

            <View style={[this.props.style, OCAStyles.OCAContent]}>
                {this.props.children}
            </View>

        );

    }

}