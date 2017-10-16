import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Image, StyleSheet, View, Text } from 'react-native';

import * as colors from '../theme/colors';
import ListItem from './ListItem';

function FilmListItem({ film, onItemSelected }) {
  const nextShowtime = film.showtimes.nodes[0];
  const nextShowTimeDate = moment(nextShowtime.startsAt).calendar();
  const nextShowtimeChannel = nextShowtime.channel;

  function onFilmSelected() {
    onItemSelected(film);
  }

  return (
    <ListItem style={styles.listItem} onPress={onFilmSelected} underlayColor={colors.$gallery}>
      <View style={styles.container}>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>{film.name}{film.year && <Text style={styles.year}> ({film.year})</Text>}</Text>
          <Text style={styles.datetime}>{nextShowTimeDate} on {nextShowtimeChannel}</Text>
        </View>
        { !!(film.tmdbRating) && <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{film.tmdbRating}%</Text>
        </View>}
      </View>
    </ListItem>
  );
}

FilmListItem.propTypes = {
  film: PropTypes.object,
  onItemSelected: PropTypes.func
}

export default FilmListItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.$concrete,
    paddingTop: 6,
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
    color: colors.$doveGray
  },
  datetime: {
    fontSize: 12
  },
  rating: {
    fontSize: 16,
    color: colors.$primary
  }
});