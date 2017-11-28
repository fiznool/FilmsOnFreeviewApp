import React from 'react';
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {colors} from '../theme';

const isAndroid = Platform.OS === 'android';

const Button = ({ title, onPress }) => {
  if(isAndroid && title) {
    title = title.toUpperCase();
  }

  return (
    <TouchableOpacity style={buttonStyles.container} onPress={onPress}>
      <Text style={buttonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

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