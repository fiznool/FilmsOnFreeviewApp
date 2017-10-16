import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function FilmDetail({ film }) {
  return (
    <View>
      <Text>{film.name}</Text>
    </View>
  )
}

FilmDetail.displayName = 'FilmDetail';

FilmDetail.propTypes = {
  film: PropTypes.object
}

export default FilmDetail;