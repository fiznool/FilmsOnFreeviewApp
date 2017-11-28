import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import {colors} from '../theme';
import FilmFilterBar from './FilmFilterBar';
import FilmListItem from './FilmListItem';

function FilmList({
  films,
  loading,
  refreshing,
  onFilmSelected,
  onRefresh,
  onFilterPress
}) {
  return (
    <View style={styles.container}>
      { loading && <ActivityIndicator style={styles.loader} /> }
      <FlatList
        data={films}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => <FilmListItem film={item} onItemSelected={onFilmSelected} />
        }
        ListHeaderComponent={
          () => !loading && films.length &&
          <FilmFilterBar onPress={onFilterPress}/>
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
    flex: 1
  },
  loader: {
    marginTop: 100
  }
});