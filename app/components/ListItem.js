import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.film.title}</Text>
        <Text style={styles.datetime}>{this.props.film.date}</Text>
        <Text style={styles.channel}>{this.props.film.channel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 4,
    marginTop: 4,
    paddingBottom: 6,
    paddingLeft: 6,
    paddingRight: 6
  },
  title: {
    fontSize: 16
  },
  datetime: {
    fontSize: 12
  },
  channel: {
    fontSize: 12
  }
});