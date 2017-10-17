import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import * as colors from '../theme/colors';
import FilmList from '../components/FilmList';
import { produceScheduleOfFilms } from '../utils/FilmUtils';

const filmsListQuery = gql`
  query {
    films: allFilms {
      nodes {
        id
        name
        year
        synopsis
        tmdbId
        tmdbRating
        showtimes: showtimesByFilmId {
          nodes {
            startsAt
            endsAt
            channel
          }
        }
      }
    }
  }
`;

function FilmListScreen({ navigation, data }) {
  const { loading } = data;
  const films = produceScheduleOfFilms((data.films && data.films.nodes) || []);

  function onFilmSelected(film) {
    navigation.navigate('FilmDetail', {film})
  }
  return <FilmList films={films} loading={loading} onFilmSelected={onFilmSelected} />
}

FilmListScreen.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.object
}

FilmListScreen.navigationOptions = {
  title: 'Films on Freeview',
  headerStyle: {
    backgroundColor: colors.$primary
  },
  headerTintColor: colors.$white
};

const FilmListScreenWithData = graphql(filmsListQuery)(FilmListScreen);

export default FilmListScreenWithData;
