import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

const placeholderImage = require('../assets/film-poster-placeholder.png')

export default class ListItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={{width: 50, height: 50 }} source={placeholderImage} />
        </View>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>{this.props.film.title}</Text>
          <Text style={styles.datetime}>{this.props.film.date}</Text>
          <Text style={styles.channel}>{this.props.film.channel}</Text>
        </View>
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
    paddingRight: 6,
    flexDirection: 'row'
  },
  imageContainer: {
    width: 60
  },
  titlesContainer: {
    flex: 1
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