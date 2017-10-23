import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import * as colors from './theme/colors';
import FilmListScreen from './screens/FilmListScreen';
import FilmDetailsScreen from './screens/FilmDetailScreen';
import FilmFilterModal from './screens/FilmFilterModal';

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
        <StatusBar barStyle="light-content" backgroundColor={colors.$primary700} />
        <Screens />
        <FilmFilterModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});