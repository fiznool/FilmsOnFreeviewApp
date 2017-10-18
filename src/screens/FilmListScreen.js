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
  const { refetch, networkStatus } = data;
  const films = produceScheduleOfFilms((data.films && data.films.nodes) || []);

  const loading    = networkStatus === 1;
  const refreshing = networkStatus === 4;
  const error      = networkStatus === 8;

  function onFilmSelected(film) {
    navigation.navigate('FilmDetail', {film})
  }

  return (
    <FilmList
     films={films}
     loading={loading}
     refreshing={refreshing}
     onFilmSelected={onFilmSelected}
     onRefresh={refetch} />
  )
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

const FilmListScreenWithData = graphql(filmsListQuery, {
  options: { notifyOnNetworkStatusChange: true }
})(FilmListScreen);

export default FilmListScreenWithData;
