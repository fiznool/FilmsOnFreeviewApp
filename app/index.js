/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import HeaderBar from './components/HeaderBar';
import ListItem from './components/ListItem';
import StatusBarSpacer from './components/StatusBarSpacer';

import filmData from './data/films.json';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarSpacer />
        <HeaderBar />
        {filmData.map(film =><ListItem film={film} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});