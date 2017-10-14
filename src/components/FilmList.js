import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import FilmListItem from './FilmListItem';

export default FilmList = ({ films, loading }) => (
  <View>
    { loading && <ActivityIndicator style={{ marginTop: 100 }} /> }
    <FlatList
      style={styles.container}
      data={films}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FilmListItem film={item} />} />
  </View>
  );

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});