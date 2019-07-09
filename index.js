/* @flow */

// Modules
import LibraryModule from './src/modules/LibraryModule';
import TavastEventsModule from './src/modules/TavastEventsModule';
import Event from './src/modules/TavastEventsModule/components/Event';
import RSSFeedModule from './src/modules/RSSFeedModule';
import Release from './src/modules/RSSFeedModule/components/Release';
import HmlSplashScreen from "./src/modules/SplashScreen";
import WebViewModule from './src/modules/WebView';
import EStyleSheet from 'react-native-extended-stylesheet'
import { type ColorSet } from './src/config/types';

// Development
import Development from './development';


type ColorSet = {
  max: string,
  med: string,
  min: string,
}

// Colors based on HML brand
const colors = {
  blue: '#1E3250', //Blue 'Sininen virta'
  orange: '#F77952', //Orange 'Tiili'
  white: '#FFFFFF', //White
};

// Create global color variables with default values
const styles = EStyleSheet.build({
  $blue: colors.blue != null ? colors.blue : '#adadad',
  $orange: colors.orange != null ? colors.orange : '#7d7d7d',
  $white: colors.white != null ? colors.white : '#2d2d2d',
});

export { LibraryModule, TavastEventsModule, Event, RSSFeedModule, Release, HmlSplashScreen, WebViewModule };

