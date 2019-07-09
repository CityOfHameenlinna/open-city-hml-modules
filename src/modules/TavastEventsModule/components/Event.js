/* @flow */
import React from 'react';
import { View, Text, ImageBackground, ScrollView, Dimensions, Image } from 'react-native';

import { Header } from 'react-native-elements'
import HTML from 'react-native-render-html';

import * as DateTime from 'LibraryModule/src/components/DateTime';
import { styles } from '../config/styles';

import OCAStyles from 'LibraryModule/OCAStyles.js';

type Props = { 
    navigation: any
};

type State = { };

export default class Events extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        
        this.state = { };
    }

    render() {
        let navigation = this.props.navigation;
        let image, title, location, date, description;
        if (navigation != null) {
            image = navigation.getParam('image', null);
            title = navigation.getParam('title', null);
            location = navigation.getParam('location', null);
            date = navigation.getParam('date', null);
            description = navigation.getParam('description', null);
        }

        let windowHeight = Dimensions.get('window').height;
        return(
                <ScrollView style={{flex: 1, backgroundColor: '#f6f8fa'}} contentContainerStyle={{minHeight: windowHeight, alignItems: 'center'}}>

                    <View style={{width: '100%', height: windowHeight * 0.33, alignItems: 'center', justifyContent: 'center'}}>
                        {image != null && image != '' && <ImageBackground source={{uri: image}} style={{width: '100%', height: '100%'}}/>}
                    </View>

                    <View style={{flex: 1, width: '90%', marginStart: 5, marginTop: 20, marginBottom: 10, backgroundColor: '#f6f8fa', alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Text style={[OCAStyles.heading, OCAStyles.h1]}>
                                {title != null && title}
                            </Text>
                            <Text style={{color: '#1E3250', fontSize: 15}}>
                                {date != null && date}
                            </Text>
                            <Text>
                                {location != null && location}
                            </Text>
                        </View>
                    </View>

                    <View style={[OCAStyles.roudedWhiteBox, styles.content]}>
                        <View>
                            {description != null && <HTML html={description}/>}
                        </View>
                    </View>

                </ScrollView>
        );
    }
}