import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from 'react-native';
import colors from 'LibraryModule/src/config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  modalVisible: boolean,
  modalText: string,
  onClose(): () => void,
};

const PopupModal = (props: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onClose}>

      <View style={styles.wrapper}>

        <View style={styles.textWrapper}>
          <Text style={styles.modalText}>{props.modalText}</Text>
        </View>

        <TouchableHighlight
          onPress={props.onClose}
          style={styles.modalButton}>
          <Icon name='close' size={40} color={colors.min} />
        </TouchableHighlight>

      </View>
      {/* Invisible button for filling the rest of the view, so that user input will close the dialog */}
      <TouchableWithoutFeedback
        onPressIn={props.onClose}>
        {/* View to fill the button */}
        <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.max+'EE',
    padding: 15,
    flexDirection: 'row',
    marginTop: 80,
  },
  textWrapper: {
    flex: 2,
  },
  modalText: {
    color: colors.min,
    justifyContent: 'flex-start',
  },
  modalButton: {
    justifyContent: 'flex-end',
  }
});

export default PopupModal;