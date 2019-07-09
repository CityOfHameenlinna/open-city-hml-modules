import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

/* Use this if you are using Expo
import { Svg } from 'expo';
const { Circle, Rect } = Svg;
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class HmlTriangle extends React.Component {
  render() {
    return (
      <View>
	    <Svg width={80} height={80}>
	    	<Rect  fill="transparent" />
  			<G>
    				<Path d="M-.518-.595h98l-98 98v-98z" fill="#f77259" />
  			</G>
	    </Svg>
      </View>
    );
  }
}
