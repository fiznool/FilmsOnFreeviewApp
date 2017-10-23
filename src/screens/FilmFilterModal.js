import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { getNavFilterOptionsModalVisible } from '../selectors';
import { actionCreators } from '../store/navigation';

import * as colors from '../theme/colors';

const FilmFilterModal = ({ visible, hideFilterOptionsModal }) => {
  return (
    <Modal
      isVisible={visible}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.filterOption}>
          <Text>There will soon be some filter options here.</Text>
        </View>
        <Button onPress={hideFilterOptionsModal} title="Apply" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0
  },
  content: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.$white,
    ...Platform.select({
      ios: {
        marginTop: 64
      },
      android: {
        marginTop: 56
      }
    })
  },
  filterOption: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  visible: getNavFilterOptionsModalVisible(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmFilterModal);