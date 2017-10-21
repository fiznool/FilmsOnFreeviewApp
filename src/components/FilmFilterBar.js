import React from 'react';
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native';

import * as colors from '../theme/colors';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const Button = ({ title, onPress }) => (
  <Touchable style={buttonStyles.container} onPress={onPress}>
    <Text style={buttonStyles.title}>{title}</Text>
  </Touchable>
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

const FilmFilterBar = () => (
  <View style={styles.container}>
    <Button title="Sort By" />
    <Button title="Filter" />
  </View>
);

export default FilmFilterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.$concrete,
  }
});