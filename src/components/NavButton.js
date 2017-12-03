import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import PropTypes from 'prop-types';
import icons from '../assets/icons';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        width: 44,
        height: 44
      },
      android: {
        width: 56,
        height: 56
      }
    })
  },
  image: {
    ...Platform.select({
      ios: {
        width: 24,
        height: 24
      },
      android: {
        width: 30,
        height: 30
      }
    })
  }
});

const NavButton = ({ icon, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.image} source={icons[icon]} />
  </TouchableOpacity>
);

NavButton.propTypes = {
  icon: PropTypes.oneOf(['openInBrowser']).isRequired,
  onPress: PropTypes.func
};

export default NavButton;
