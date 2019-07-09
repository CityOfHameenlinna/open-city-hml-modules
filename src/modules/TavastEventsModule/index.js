/* @flow */
import React from 'react';
import { 
View, 
Text, FlatList, 
ActivityIndicator, ImageBackground, Image, ScrollView, Linking, TouchableHighlight
} from "react-native";
import { List, ListItem, Avatar, Header } from 'react-native-elements'

import {sendRequest} from './components/Fetch';
import * as DateTime from 'LibraryModule/src/components/DateTime';
import Event from './components/Event'

import {styles} from './config/styles';

import OCAStyles from 'LibraryModule/OCAStyles.js';
// $FlowFixMe
import BgImg from 'LibraryModule/assets/img/tapahtumat_bg.jpeg';

type Props = { 
  navigation: any
};

type State = { 
  isLoading: boolean,
  item: any,
  data: any,
  error: string,
};


export default class TavastEventsModule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: true,
      item: '',
      data: '',
      error: '',
    };
  }

  componentDidMount() {
    let url = 'https://api.tavastiaevents.fi/v1/event/?address_locality_fi=Hämeenlinna&format=json&include=location&page_size=64&sort=start_time&start=' + DateTime.getToday();
    // Fetch events from url
    sendRequest(url)
    .then(res => {
      this.sortEventsByDay(res.data);
    })
    .catch(error => {
      this.setState({ error, isLoading: false });
    });
  }

  sortEventsByDay(data: any) {

    let today = [];
    let todayMD = [];
    let future = [];
    let events = [];

    data.forEach(item => {

      let startDate = DateTime.getDate(item.start_time);
      let endDate = DateTime.getDate(item.end_time);

      if (item.multi_day) {
        if (DateTime.isDateWithinRange(startDate, endDate)) {
          todayMD.push(item);
        }
        else {
          future.push(item);
        }
      }
      else if (DateTime.isDateToday(startDate)) {
          today.push(item);
        }
        else {
          future.push(item);
        }
    });

    events = events.concat(today, todayMD, future);
    this.setState({ data: events, isLoading: false});
  }

  showDetails(item: any) {

    let startDate = DateTime.getDate(item.start_time);
    let startTime = DateTime.getTime(item.start_time);
    let endDate = DateTime.getDate(item.end_time);
    let isMultiDay = item.multi_day;

    let image = item.images[0].url;
    let title = item.name.fi;
    let description = item.description.fi;
    let location = item.location.name.fi;
    let date = isMultiDay ?  
    startDate + '-' + endDate + ", " + startTime : 
    startDate + ", " + startTime; 

    if (this.props.navigation != null) {
      this.props.navigation.navigate('Details', {
        image: image,
        title: title,
        description: description,
        location: location,
        date: date,
      });
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={BgImg} style={[styles.imgBg]}>
          <View style={[styles.backgroundOverlay, OCAStyles.opacityBlueDark]}>
            <View style={[styles.headerContainer]}>
              <Text style={[OCAStyles.heading, OCAStyles.h1]}>Tapahtumat</Text>
                <TouchableHighlight style={[OCAStyles.button, OCAStyles.buttonSubmitBorder, OCAStyles.widthByContent, OCAStyles.margin20_0]} onPress={() => Linking.openURL('https://tavastiaevents.fi/events/create')}><Text style={[OCAStyles.orangeText, OCAStyles.bold]}>+ lisää tapahtuma</Text></TouchableHighlight>
            </View>
          </View>
        </ImageBackground>

        {
          this.state.isLoading &&
          <View style={styles.container, styles.activity}>
            <ActivityIndicator size='large' color='#f77952' />
            <Text>Ladataan...</Text>
          </View>
        }
        {
          !this.state.isLoading &&
          <FlatList
	          style={OCAStyles.flatList}
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
	              containerStyle={OCAStyles.listItem}
                hideChevron={true}
                title={
                  <View style={[styles.container, styles.item, OCAStyles.roudedWhiteBox]}>
                    <Image source={{uri: item.images[0].url}} style={styles.avatar} />
                    <View style={{flex: 2, flexDirection: 'column'}}>
                      <Text style={[styles.title, OCAStyles.heading]}>{item.name.fi}</Text>
                      <Text style={[styles.text, OCAStyles.bold]}>
                        { item.end_time != null && DateTime.getDate(item.end_time) != DateTime.getDate(item.start_time) ?  DateTime.getDate(item.start_time) + '-' + DateTime.getDate(item.end_time) + ", " + DateTime.getTime(item.start_time) 
                        : DateTime.getDate(item.start_time) + ", " + DateTime.getTime(item.start_time) }
                      </Text>
                      <Text style={styles.text}>{item.location.name.fi}</Text>
                    </View>
                  </View>
                }
                onPress={() => this.showDetails(item)}
              />
            )}
          keyExtractor={(item, index) => index.toString()}
          />
        }
      </ScrollView>
    );
  }
}
