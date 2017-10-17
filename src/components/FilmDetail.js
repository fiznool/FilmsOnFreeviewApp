import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import FilmPosterImage from './FilmPosterImage';

const GUTTER = 6;

function FilmDetail({ film }) {
  const deviceWidth = Dimensions.get('window').width;
  const posterWidth = Math.round((deviceWidth/2) - (GUTTER*4));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <FilmPosterImage width={posterWidth} tmdbId={film.tmdbId} />
        </View>
        <View style={styles.col}>
          <Text>{film.name}</Text>
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
    margin: GUTTER
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    margin: GUTTER,
  }
});