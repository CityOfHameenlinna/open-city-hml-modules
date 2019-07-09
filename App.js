/* @flow */
import React, {Component} from 'react';
import { Text, View } from 'react-native';

import HmlSplashScreen from './src/modules/SplashScreen';
import LibraryModule from './src/modules/LibraryModule';
import RSSFeedModule from './src/modules/RSSFeedModule';
import TavastEventsModule from './src/modules/TavastEventsModule';
import Event from './src/modules/TavastEventsModule/components/Event';
import WebViewModule from './src/modules/WebView';


type Props = {};

type State = {};

// Basic class used for debugging 
class App extends React.Component<Props, State>{

constructor(props: Props) {
	super(props);
	this.state = {};
}

  render() {   
    return (
      <HmlSplashScreen />
    );
  }
}

export default App;
