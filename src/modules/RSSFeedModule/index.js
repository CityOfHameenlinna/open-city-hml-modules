/* @flow */
import React from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView, ImageBackground } from "react-native";
import { List, ListItem, Avatar } from 'react-native-elements'

import { sendRequest } from './components/Fetch';
import * as DateTime from 'LibraryModule/src/components/DateTime';
import * as XmlParser from 'LibraryModule/src/components/XmlParser';

import {styles} from './config/styles';
// $FlowFixMe
import BgImg from 'LibraryModule/assets/img/splash--tiedotteet-bg.jpg';

import OCAStyles from 'LibraryModule/OCAStyles';

type Props = { 
  navigation: any,
};

type State = { 
  isLoading: boolean,
  data: string,
  error: string,
};


export default class RSSFeedModule extends React.Component<Props, State> {
constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
      data: '',
      error: '',
    };
  }

  componentDidMount() {
    let url = 'https://www.hameenlinna.fi/tiedotteet/feed/';
    // Fetch rss feed from url
    sendRequest(url)
      .then(res => XmlParser.xmlToJson(res))
      .then(res => {
        this.setState({
          data: res.channel[0].item, isLoading: false
        });
    })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

    showDetails(item: any) {
    let title = item.title[0];
    let description = item['content:encoded'][0];
    let date = DateTime.getDate(item.pubDate[0]) + " " + DateTime.getTime(item.pubDate[0]);
    let link = item.link[0];

    if (this.props.navigation != null) {
      this.props.navigation.navigate('Details', {
    
        title: title,
        description: description,
        date: date,
        link: link,
      });
    }
  }

  render() {
      
      
      return(
      
      

        <ScrollView>
            <View>
                <ImageBackground source={BgImg} style={[styles.imgBg]}>
                    <View style={[styles.backgroundOverlay, OCAStyles.opacityBlueDark]}>
                            <View style={[styles.headerContainer]}>

                                <Text style={[OCAStyles.heading, OCAStyles.h1, OCAStyles.margin20_0]}>Ajankohtaista</Text>

                            </View>
                        </View>

                </ImageBackground>

        {this.state.isLoading ?
            <View style={styles.container, styles.activity}>
              <ActivityIndicator size='large' color='#f77952' />
              <Text>Ladataan...</Text>
            </View>
        :
            <View>
              <FlatList
                style={[OCAStyles.flatList]}
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItem
                    containerStyle={[OCAStyles.listItem, styles.listItem]}
                    hideChevron={true}
                    title={
                      <View style={[styles.container, OCAStyles.roudedWhiteBox, styles.item]}>
                            <View style={{flex: 1, flexDirection: 'column', padding: 10}}>
                                <Text style={[OCAStyles.heading]}>{item.title[0]}</Text>
                                <Text style={[OCAStyles.bold, OCAStyles.margin10_0]}>{DateTime.getDate(item.pubDate) + " " + DateTime.getTime(item.pubDate)}</Text>
                            </View>
                      </View>
                    }
                    onPress={() => this.showDetails(item)}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

        }

        </View>

        </ScrollView>

        );

    }

}