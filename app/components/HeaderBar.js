import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Films on Freeview</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68AA63',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  }
});