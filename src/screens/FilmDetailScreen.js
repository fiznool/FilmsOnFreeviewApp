import React from 'react';
import PropTypes from 'prop-types';

import FilmDetail from '../components/FilmDetail';

function FilmDetailScreen({ navigation }) {
  const { film } = navigation.state.params;
  return <FilmDetail film={film} />
}

FilmDetailScreen.propTypes = {
  navigation: PropTypes.object
}

FilmDetailScreen.navigationOptions = ({navigation}) => {
  const { film } = navigation.state.params;
  return {
    title: film.name
  }
};

export default FilmDetailScreen;