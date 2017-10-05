import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar, View } from 'react-native';

export default class StatusBarSpacer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#559951" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68AA63',
    height: Platform.OS === 'ios' ? 20 : 0
  }
});