import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import ListScreen from './screens/ListScreen';

const Screens = StackNavigator({
  List: { screen: ListScreen }
}, {
  initialRouteName: 'List'
});

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#559951" />
        <Screens />
      </View>
    );
  }
}