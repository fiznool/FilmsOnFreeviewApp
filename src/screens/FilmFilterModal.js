import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Text } from 'react-native';

import HeaderBar from '../components/HeaderBar';
import { getNavFilterOptionsModalVisible } from '../selectors';
import { actionCreators } from '../store/navigation';

const FilmFilterModal = ({ visible, hideFilterOptionsModal }) => {
  const buttonLeft = {
    title: 'Cancel',
    onPress: hideFilterOptionsModal
  }

  const buttonRight = {
    title: 'Save',
    onPress: hideFilterOptionsModal
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}>
      <HeaderBar title="Filter" buttonLeft={buttonLeft} buttonRight={buttonRight}/>
      <Text>Hi I'm a modal!</Text>
    </Modal>
  );
};

const mapStateToProps = state => ({
  visible: getNavFilterOptionsModalVisible(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmFilterModal);