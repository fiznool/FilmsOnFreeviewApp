import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

function ListItem({ onPress, children }) {
  return (
    <TouchableNativeFeedback
     onPress={onPress}>
     {children}
    </TouchableNativeFeedback>
  )
}

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default ListItem;