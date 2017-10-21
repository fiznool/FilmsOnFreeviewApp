import React from 'react';
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../theme/colors';

import FilmSortPicker from './FilmSortPicker';

const Button = ({ title, style, onPress }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={buttonStyles.title}>{title}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

const buttonContainerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 16,
  paddingVertical: 8
};

const buttonStyles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: colors.$accent
  }
});

const FilmFilterBar = () => (
  <View style={styles.container}>
    <FilmSortPicker style={styles.sortPicker} />
    <Button title="Filter" style={styles.filter}/>
  </View>
);

export default FilmFilterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.$concrete,
  },
  sortPicker: {
    ...buttonContainerStyle,
    ...Platform.select({
      android: {
        flex: 3
      }
    })
  },
  filter: {
    ...buttonContainerStyle
  },
});