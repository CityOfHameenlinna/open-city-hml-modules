/* @flow */
import React from 'react';
import { View, Text, ImageBackground, ScrollView, Dimensions, Image, Linking, TouchableHighlight } from 'react-native';

import HTML from 'react-native-render-html';

import * as DateTime from 'LibraryModule/src/components/DateTime';
// $FlowFixMe
import image from 'LibraryModule/assets/img/feed_placeholder.jpeg';
import { styles } from '../config/styles';


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
        let title, location, date, description, link;
        if (navigation != null) {
            title = navigation.getParam('title', null);
            date = navigation.getParam('date', null);
            description = navigation.getParam('description', null);
            link = navigation.getParam('link', null);
        }

        let windowHeight = Dimensions.get('window').height;
        return(
                <ScrollView style={{flex: 1, backgroundColor: '#f6f8fa'}} contentContainerStyle={{minHeight: windowHeight}}>

                    <View style={{width: '100%', height: windowHeight * 0.33, alignItems: 'center', justifyContent: 'center'}}>
                        <ImageBackground source={image} style={{width: '100%', height: '100%'}}/>
                    </View>

                    <View style={{flex: 1, marginStart: 5, marginTop: 20, marginBottom: 10, backgroundColor: '#f6f8fa', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: '85%', height: '100%'}}>
                            <Text style={{color: '#F77952', fontSize: 25}}>
                                {title != null && title}
                            </Text>
                            <Text style={{color: '#1E3250', fontSize: 15}}>
                                {date != null && date}
                            </Text>
                        </View>
                    </View>

                    <View style={{flex: 3, backgroundColor: '#f6f8fa', marginBottom: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <View elevation={2} style={{width: '85%', height: '100%', borderRadius: 10, paddingStart: 10, paddingEnd: 5, paddingTop: 10, paddingBottom: 5,  backgroundColor: '#FFFFFF'}}>
                            {
                                description != null && 
                                <HTML html={description} imagesMaxWidth={Dimensions.get('window').width * 0.80} onLinkPress={(evt, href) => Linking.openURL(href)} />
                            }
                        </View>
                    </View>

                    <View style={{flex: 1, backgroundColor: '#f6f8fa', marginBottom: 20, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                        {
                        link != null &&
                            <TouchableHighlight onPress={() => Linking.openURL(link)} style={{padding:10, borderRadius: 50, backgroundColor: '#F77952', alignSelf: 'center'}}>
                                <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Avaa tiedote</Text>
                            </TouchableHighlight>
                        }
                    </View>

                </ScrollView>
        );
    }
}
