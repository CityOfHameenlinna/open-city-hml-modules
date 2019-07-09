import React, {Component} from 'react';
import {Text, View} from 'react-native';

import OCAStyles from './OCAStyles.js';

export default class ContentBlock extends React.Component<Props, State>{

    render() {

        return (

            <View style={[OCAStyles.ContentBlock, this.props.style]}>
                {this.props.children}
            </View>

        );

    }

}