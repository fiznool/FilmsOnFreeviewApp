import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../theme';
import FilmFilterBar from './FilmFilterBar';
import FilmListItem from './FilmListItem';

function EmptyList() {
  return (
    <View style={styles.emptyList}>
      <Text>No films found! Try changing the filters.</Text>
    </View>
  );
}

function FilmList({
  films,
  loading,
  refreshing,
  onFilmSelected,
  onRefresh,
  onFilterPress
}) {
  const emptyList = !(loading || films.length) ? <EmptyList /> : null;

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator style={styles.loader} />}
      <FlatList
        data={films}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FilmListItem film={item} onItemSelected={onFilmSelected} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={emptyList}
      />
      {!loading && <FilmFilterBar onPress={onFilterPress} />}
    </View>
  );
}

FilmList.propTypes = {
  films: PropTypes.array,
  loading: PropTypes.bool,
  refreshing: PropTypes.bool,
  onFilmSelected: PropTypes.func,
  onRefresh: PropTypes.func,
  onFilterPress: PropTypes.func
};

export default FilmList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.$white,
    flex: 1
  },
  loader: {
    marginTop: 100
  },
  emptyList: {
    marginTop: 40,
    marginVertical: 20,
    alignItems: 'center'
  }
});
