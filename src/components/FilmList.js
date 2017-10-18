import React, { Component } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import * as colors from '../theme/colors';
import FilmListItem from './FilmListItem';

function FilmList({ films, loading, refreshing, onFilmSelected, onRefresh }) {
  return (
    <View>
      { loading && <ActivityIndicator style={styles.loader} /> }
      <FlatList
        style={styles.container}
        data={films}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => <FilmListItem film={item} onItemSelected={onFilmSelected} />
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } />
    </View>
  )
}

FilmList.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool,
  refreshing: PropTypes.bool,
  onFilmSelected: PropTypes.func,
  onRefresh: PropTypes.func,
}

export default FilmList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.$white,
  },
  loader: {
    marginTop: 100
  }
});