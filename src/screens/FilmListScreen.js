import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilmList from '../components/FilmList';
import { getFilteredFilms, getFilmsLoading } from '../selectors';
import { actionCreators as filmsActionCreators } from '../store/films';

class FilmListScreen extends PureComponent {
  render() {
    const { films, isLoading, refetch, navigation } = this.props;
    const hasFilms = !!(films && films.length);

    function onFilmSelected(film) {
      navigation.navigate('FilmDetailScreen', { film });
    }

    function showFilterOptionsModal() {
      navigation.navigate('FilterScreen');
    }

    return (
      <FilmList
        films={films}
        loading={isLoading && !hasFilms}
        refreshing={isLoading && hasFilms}
        onFilmSelected={onFilmSelected}
        onRefresh={refetch}
        onFilterPress={showFilterOptionsModal}
      />
    );
  }
}

FilmListScreen.propTypes = {
  films: PropTypes.array,
  isLoading: PropTypes.bool,
  refetch: PropTypes.func,
  navigation: PropTypes.object
};

FilmListScreen.navigationOptions = {
  title: 'Films on Freeview'
};

const mapStateToProps = state => {
  return {
    films: getFilteredFilms(state),
    isLoading: getFilmsLoading(state)
  };
};

const mapDispatchToProps = dispatch => ({
  refetch: () => dispatch(filmsActionCreators.fetchFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmListScreen);
