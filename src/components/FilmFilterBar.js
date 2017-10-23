import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../theme/colors';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
    <Text style={buttonStyles.title}>{title}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingVertical: 8
  },
  title: {
    fontSize: 14,
    color: colors.$accent
  }
});

const FilmFilterBar = ({ onPress }) => (
  <View style={styles.container}>
    <Button title="Filter" onPress={onPress} />
  </View>
);

export default FilmFilterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.$concrete,
  },
});