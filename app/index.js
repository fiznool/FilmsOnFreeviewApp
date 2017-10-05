import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';

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
        <FlatList data={filmData} renderItem={({item}) => <ListItem film={item} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});