import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';

import filmData from '../data/films.json';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: 'Films on Freeview',
    headerStyle: {
      backgroundColor: '#68AA63'
    },
    headerTintColor: '#fff'
  };

  render() {
    return (
      <FlatList style={styles.container} data={filmData} renderItem={({item}) => <ListItem film={item} />} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});