import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as colors from '../theme/colors';
import FilmDetail from '../components/FilmDetail';

function FilmDetailScreen({ navigation }) {
  const { film } = navigation.state.params;
  return <FilmDetail film={film} />
}

FilmDetailScreen.propTypes = {
  navigation: PropTypes.object
}

FilmDetailScreen.navigationOptions = (props) => {
  const { film } = props.navigation.state.params;
  return {
    title: film.name,
    headerStyle: {
      backgroundColor: colors.$primary
    },
    headerTintColor: colors.$white
  }
};

export default FilmDetailScreen;