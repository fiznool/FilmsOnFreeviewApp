import React, { Component } from 'react';
import moment from 'moment';
import { Image, StyleSheet, View, Text } from 'react-native';

const placeholderImage = require('../assets/film-poster-placeholder.png')

export default ListItem = ({ film }) => {
  const nextShowtime = film.showtimes.nodes[0];
  const nextShowTimeDate = moment(nextShowtime.startsAt).calendar();
  const nextShowtimeChannel = nextShowtime.channel;

  return (
    <View style={styles.container}>
    {/* <View style={styles.imageContainer}>
      <Image style={{width: 50, height: 50 }} source={placeholderImage} />
    </View> */}
    <View style={styles.titlesContainer}>
      <Text style={styles.title}>{film.name}{film.year && <Text style={styles.year}> ({film.year})</Text>}</Text>
      <Text style={styles.datetime}>{nextShowTimeDate} on {nextShowtimeChannel}</Text>
    </View>
    { !!(film.tmdbRating) && <View style={styles.ratingContainer}>
      <Text style={styles.rating}>{film.tmdbRating}%</Text>
    </View>}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 4,
    marginTop: 4,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row'
  },
  imageContainer: {
    width: 60
  },
  titlesContainer: {
    flex: 1
  },
  ratingContainer: {
    alignSelf: 'center',
    paddingLeft: 6
  },
  title: {
    fontSize: 16,
    marginBottom: 2
  },
  year: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555'
  },
  datetime: {
    fontSize: 12
  },
  rating: {
    fontSize: 16,
    color: '#68AA63'
  }
});