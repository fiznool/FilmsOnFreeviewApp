import React from 'react';
import { Linking } from 'react-native';
import PropTypes from 'prop-types';

import FilmDetail from '../components/FilmDetail';
import NavButton from '../components/NavButton';

function FilmDetailScreen({ navigation }) {
  const { film } = navigation.state.params;
  return <FilmDetail film={film} />;
}

FilmDetailScreen.propTypes = {
  navigation: PropTypes.object
};

FilmDetailScreen.navigationOptions = ({ navigation }) => {
  const { film } = navigation.state.params;
  const openFilmUrl = () => Linking.openURL(film.imdbUrl);
  return {
    title: film.name,
    headerRight: <NavButton icon="openInBrowser" onPress={openFilmUrl} />
  };
};

export default FilmDetailScreen;
