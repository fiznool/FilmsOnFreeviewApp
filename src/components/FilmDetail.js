import React, { Component } from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import * as colors from '../theme/colors';

import FilmPosterImage from './FilmPosterImage';
import FilmShowtimeText from './FilmShowtimeText';

const GUTTER = 6;

function FilmDetail({ film }) {
  const deviceWidth = Dimensions.get('window').width;
  const posterWidth = Math.round((deviceWidth/2) - (GUTTER*4));

  const showtimes = film.showtimes.map((showtime, idx) => <FilmShowtimeText style={styles.showtime} showtime={showtime} key={idx} />);

  function openInTMDb() {
    console.log();
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <FilmPosterImage width={posterWidth} tmdbId={film.tmdbId} />
        </View>
        <View style={styles.col}>
          <Text style={styles.name}>{film.name}</Text>
          {film.year && <Text style={styles.year}>Released in {film.year}</Text>}
          {film.tmdbRating && <Text style={styles.rating}>Rating: {film.tmdbRating}%</Text>}
          <View style={styles.showtimesContainer}>
            <Text style={styles.showtimesHeader}>Showtimes:</Text>
            {showtimes}
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>{film.synopsis.trim()}</Text>
        </View>
      </View>
    </View>
  )
}

FilmDetail.propTypes = {
  film: PropTypes.object.isRequired
}

export default FilmDetail;

const styles = StyleSheet.create({
  container: {
    padding: GUTTER,
    flex: 1,
    backgroundColor: colors.$white
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    margin: GUTTER,
  },
  name: {
    fontSize: 16,
  },
  year: {
    fontSize: 12,
    marginTop: 4
  },
  rating: {
    fontSize: 12,
    marginTop: 4
  },
  showtimesContainer: {
    // flex: 1
  },
  showtimesHeader: {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
    borderTopWidth: 1,
    borderTopColor: colors.$concrete
  },
  showtime: {
    fontSize: 12,
    marginBottom: 4
  }
});