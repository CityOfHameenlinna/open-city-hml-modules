/*@flow*/
import * as React from 'react';
import {
  WebView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'LibraryModule/src/config/colors';

type Props = {
    disabled: boolean,
    onPress: any,
};

type State = {
};

// TODO: Remove this when all links are added to drawer
// Quickly made bar with single button. 
class NavigationBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

  render() {

    const previous = (<Icon name='arrow-left-bold' size={40} color={colors.min} />)

    return (
        <View style={{flex: 0.1, flexDirection: 'row', backgroundColor: colors.med}} >
            <TouchableOpacity
                onPress={this.props.onPress}
                disabled={this.props.disabled}
            >
                <View>
                    {previous}
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

export default NavigationBar;