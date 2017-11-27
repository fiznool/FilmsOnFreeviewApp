import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import * as colors from './theme/colors';
import Screens from './router';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.$primary700} />
        <Screens />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});