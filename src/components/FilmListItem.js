import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, View, Text } from 'react-native';

import * as colors from '../theme/colors';
import ListItem from './ListItem';
import FilmShowtimeText from './FilmShowtimeText';

const MIN_HUE = 10;
const MAX_HUE = 120;
const LOWER_RATING_THRESHOLD = 45;
const HIGHER_RATING_THRESHOLD = 75;

function generateRatingColor(rating) {
  let hue;

  if(rating < LOWER_RATING_THRESHOLD) {
    hue = MIN_HUE;
  } else if (rating > HIGHER_RATING_THRESHOLD) {
    hue = MAX_HUE;
  } else {
    hue = ((rating - LOWER_RATING_THRESHOLD) / (HIGHER_RATING_THRESHOLD - LOWER_RATING_THRESHOLD)) * MAX_HUE;
  }

  return `hsl(${hue}, 70%, ${ hue < 20 ? '35%' : '25%'})`;
}

function FilmListItem({ film, onItemSelected }) {
  function onFilmSelected() {
    onItemSelected(film);
  }

  return (
    <ListItem onPress={onFilmSelected} underlayColor={colors.$gallery}>
      <View style={styles.container}>
        <View style={styles.titlesContainer}>
          <Text style={styles.title}>{film.name}{film.year && <Text style={styles.year}> ({film.year})</Text>}</Text>
          <FilmShowtimeText showtime={film.nextShowtime} style={styles.datetime} />
        </View>
        { !!(film.tmdbRating) && <View style={styles.ratingContainer}>
          <Text style={[styles.rating, { color: generateRatingColor(film.tmdbRating) }]}>{film.tmdbRating}%</Text>
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
    ...Platform.select({
      ios: {
        color: colors.$doveGray
      }
    })
  },
  datetime: {
    fontSize: 12
  },
  rating: {
    fontSize: 16
  }
});