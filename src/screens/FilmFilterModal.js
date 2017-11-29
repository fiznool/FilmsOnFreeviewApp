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
    backgroundColor: colors.$transparent,
    justifyContent: 'flex-end'
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    applyFilter: PropTypes.func,
    clearFilter: PropTypes.func
  };

  applyFilter = filterOptions => {
    this.props.applyFilter(filterOptions);
    this.props.navigation.dismiss();
  };

  clearFilter = () => {
    this.props.clearFilter();
  };

  render() {
    const { filterOptions } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <FilmFilterOptions
            filterOptions={filterOptions}
            applyFilter={this.applyFilter}
            resetFilter={this.clearFilter}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  filterOptions: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
  applyFilter: filterOptions =>
    dispatch(actionCreators.filterChanged(filterOptions)),

  clearFilter: () => dispatch(actionCreators.filterReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmFilterModal);
