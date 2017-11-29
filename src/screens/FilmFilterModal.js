import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { colors } from '../theme';
import { getFilter } from '../selectors';
import { actionCreators } from '../store/filter';
import FilmFilterOptions from '../components/FilmFilterOptions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 12,
    backgroundColor: colors.$white
  }
});

class FilmFilterModal extends PureComponent {
  static navigationOptions = {
    title: 'Filter'
  };

  static propTypes = {
    navigation: PropTypes.object,
    filterOptions: PropTypes.object,
    applyFilter: PropTypes.func
  };

  applyFilter = filterOptions => {
    this.props.applyFilter(filterOptions);
    this.props.navigation.dismiss();
  };

  render() {
    const { filterOptions } = this.props;
    return (
      <View style={styles.container}>
        <FilmFilterOptions
          filterOptions={filterOptions}
          applyFilter={this.applyFilter}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filterOptions: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  applyFilter: filterOptions =>
    dispatch(actionCreators.filterChanged(filterOptions))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmFilterModal);
