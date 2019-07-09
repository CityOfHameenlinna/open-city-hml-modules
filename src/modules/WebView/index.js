/* @flow */
import React from 'react';
import {WebView, Text, View } from 'react-native';

import PopupModal from "./components/PopupModal";
import colors from 'LibraryModule/src/config/colors';

type Props = {
  src: string, // Secure connection is required
  modalVisible: boolean, // Is the warning modal shown
  modalTimeout: number, // How long will the modal be shown before automatically closing
  onLoadEnd: function,
};

type State = {
  modalVisible: boolean,
};

class WebViewModule extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      modalVisible: props.modalVisible,
    };
  }

  componentDidMount() {

    // Set timeout to hide the warning modal after a set period of time
    setTimeout(() => {
      this.hideModal();
      }, this.props.modalTimeout);
  }

  // Returns a component to be rendered on WebView error
  onError() {
    // TODO: Return a view containing the error
    console.log('WebView Error');
  }
  
  hideModal = () => this.setState({ modalVisible: false });

  render() {
    return (
      <View style={{flex: 1}}>
        <PopupModal
          modalVisible={this.state.modalVisible}
          modalText={`Sinut on ohjattu verkko-osoitteeseen ${this.props.src}`}
          onClose={this.hideModal}
        />
        <WebView
          geolocationEnabled={true}
          source={{ uri: this.props.src }}
          renderError={this.onError}
          onLoadEnd={this.props.onLoadEnd}
        />
      </View>
    );
  }
}

export default WebViewModule;
