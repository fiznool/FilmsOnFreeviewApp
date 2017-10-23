import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import * as colors from '../theme/colors';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const HEADERBAR_HEIGHT = isIOS ? 44 : 56;

const buttonShape = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

const HeaderBarButton = ({ title, onPress }) => {
  if(isAndroid && title) {
    title = title.toUpperCase();
  }

  return (
    <TouchableOpacity
      style={buttonStyles.button}
      onPress={onPress}
    >
      <Text style={buttonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

HeaderBarButton.propTypes = buttonShape;

const generateButton = data => {
  if(!data) {
    return <View style={buttonStyles.button} />
  }
  return <HeaderBarButton title={data.title} onPress={data.onPress} />
};

const buttonStyles = StyleSheet.create({
  button: {
    height: HEADERBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    ...Platform.select({
      ios: {
        width: 70
      }
    })
  },
  title: {
    fontSize: 16,
    color: colors.$white,
    paddingHorizontal: 8
  },
});

const HeaderBar = ({ title, buttonLeft, buttonRight }) => (
  <View style={styles.container}>
    { isIOS &&
    <View style={styles.statusBarSpacer} />
    }
    <View style={styles.headerBarContainer}>
      { generateButton(buttonLeft) }
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      { generateButton(buttonRight) }
    </View>
  </View>
);

HeaderBar.propTypes = {
  title: PropTypes.string,
  buttonLeft: PropTypes.shape(buttonShape),
  buttonRight: PropTypes.shape(buttonShape),
}

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.$primary,
  },
  statusBarSpacer: {
    height: 20
  },
  headerBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HEADERBAR_HEIGHT,
    ...Platform.select({
      ios: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0, 0, 0, .3)',
      },
      android: {
        elevation: 4,
        backgroundColor: colors.$primary
      }
    })
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        justifyContent: 'flex-start'
      }
    })
  },
  title: {
    color: colors.$white,
    fontWeight: 'bold',
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontSize: 16,
      },
      android: {
        fontSize: 18
      }
    })
  },
});