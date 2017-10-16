import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

function ListItem({ onPress, children, underlayColor }) {
  return (
    <TouchableHighlight
     underlayColor={underlayColor}
     onPress={onPress}>
     {children}
    </TouchableHighlight>
  )
}

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  underlayColor: PropTypes.string.isRequired
}

export default ListItem;