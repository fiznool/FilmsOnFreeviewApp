import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { gql, graphql } from 'react-apollo';

import ListItem from '../components/ListItem';

// import filmData from '../data/films.json';

const filmsListQuery = gql`
  query {
    allFilms {
      nodes {
        name
        year
        synopsis
        tmdbId
      }
    }
  }
`;

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Films on Freeview',
    headerStyle: {
      backgroundColor: '#68AA63'
    },
    headerTintColor: '#fff'
  };

  render() {
    // const { loading } = this.props.data;
    const films = (this.props.data.allFilms && this.props.data.allFilms.nodes) || [];

    return (
      <FlatList
       style={styles.container}
       data={films}
       renderItem={({item}) => <ListItem film={item} />} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

const ListScreenWithData = graphql(filmsListQuery)(ListScreen);

export default ListScreenWithData;
