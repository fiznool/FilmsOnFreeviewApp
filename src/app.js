import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import FilmListScreen from './screens/FilmListScreen';
import FilmDetailsScreen from './screens/FilmDetailScreen';

const Screens = StackNavigator({
  FilmList: { screen: FilmListScreen },
  FilmDetail: { screen: FilmDetailsScreen }
}, {
  initialRouteName: 'FilmList'
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
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