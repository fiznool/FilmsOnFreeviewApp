import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import * as colors from '../theme/colors';

function ListItem({ film, onItemSelected }) {
  const nextShowtime = film.showtimes.nodes[0];
  const nextShowTimeDate = moment(nextShowtime.startsAt).calendar();
  const nextShowtimeChannel = nextShowtime.channel;

  function onFilmSelected() {
    onItemSelected(film);
  }

  return (
    <TouchableHighlight style={styles.container} onPress={onFilmSelected}>
      <View>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>{film.name}{film.year && <Text style={styles.year}> ({film.year})</Text>}</Text>
          <Text style={styles.datetime}>{nextShowTimeDate} on {nextShowtimeChannel}</Text>
        </View>
        { !!(film.tmdbRating) && <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{film.tmdbRating}%</Text>
        </View>}
      </View>
    </TouchableHighlight>
  );
}

ListItem.propTypes = {
  film: PropTypes.object,
  onItemSelected: PropTypes.func
}

ListItem.displayName = 'ListItem';

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.$lightGrey,
    marginBottom: 4,
    marginTop: 4,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row'
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
    color: colors.$darkGrey
  },
  datetime: {
    fontSize: 12
  },
  rating: {
    fontSize: 16,
    color: colors.$primary
  }
});