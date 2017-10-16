import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '../theme/colors';

function ListItem({ onPress, children, underlayColor }) {
  if(Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
       onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableHighlight
     underlayColor={underlayColor}
     onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          {children}
        </View>
        <Icon style={styles.chevron} name="ios-arrow-forward" />
      </View>
    </TouchableHighlight>
  )
}

ListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  underlayColor: PropTypes.string.isRequired
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.$concrete,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row'
  },
  content: {
    flex: 1
  },
  chevron: {
    paddingLeft: 12,
    marginTop: 2,
    fontSize: 16,
    color: colors.$silver,
    alignSelf: 'center'
  }
});