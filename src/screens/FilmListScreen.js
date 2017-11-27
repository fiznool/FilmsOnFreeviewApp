import React from 'react';
import { bindActionCreators } from 'redux';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as colors from '../theme/colors';
import FilmList from '../components/FilmList';
import { actionCreators } from '../store/navigation';
import { getFilter, filmsSelector } from '../selectors';

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

function FilmListScreen({ films, networkStatus, navigation, refetch }) {

  const loading    = networkStatus === 1;
  const refreshing = networkStatus === 4;
  // const error      = networkStatus === 8;

  function onFilmSelected(film) {
    navigation.navigate('FilmDetailScreen', {film})
  }

  function showFilterOptionsModal() {
    navigation.navigate('FilterScreen');
  }

  return (
    <FilmList
     films={films}
     loading={loading}
     refreshing={refreshing}
     onFilmSelected={onFilmSelected}
     onRefresh={refetch}
     onFilterPress={showFilterOptionsModal} />
  )
}

FilmListScreen.propTypes = {
  films: PropTypes.array,
  networkStatus: PropTypes.number,
  refetch: PropTypes.func,
  navigation: PropTypes.object
}

FilmListScreen.navigationOptions = {
  title: 'Films on Freeview',
  headerStyle: {
    backgroundColor: colors.$primary
  },
  headerTintColor: colors.$white
};

const mapQueryToProps = ({ ownProps: { filter, navigation }, data: { films, networkStatus, refetch } }) => {
  films = films && filmsSelector({ films: films.nodes, filter }) || [];
  return {
    films,
    networkStatus,
    refetch,
    navigation
  };
};

const FilmListScreenWithData = graphql(filmsListQuery, {
  props: mapQueryToProps,
  options: { notifyOnNetworkStatusChange: true }
})(FilmListScreen);

const mapStateToProps = state => ({
  filter: getFilter(state)
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmListScreenWithData)
