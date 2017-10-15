import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import FilmList from '../components/FilmList';

// import filmData from '../data/films.json';

const filmsListQuery = gql`
  query {
    films: allFilms {
      nodes {
        id
        name
        year
        synopsis
        channel
        tmdbId
        tmdbRating
        showtimes: showtimesByFilmId {
          nodes {
            startsAt
            endsAt
          }
        }
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
    const { loading } = this.props.data;
    const films = (this.props.data.films && this.props.data.films.nodes) || [];
    return <FilmList films={films} loading={loading} />
  }
}

const ListScreenWithData = graphql(filmsListQuery)(ListScreen);

export default ListScreenWithData;
