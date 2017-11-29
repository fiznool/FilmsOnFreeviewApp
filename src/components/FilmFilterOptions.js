import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Slider } from 'react-native';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';

import { colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filterOptions: {
    flex: 1
  },
  spacer: {
    paddingVertical: 12
  },
  title: {
    fontSize: 16,
    color: colors.$primary,
    textAlign: 'center'
  },
  sliderHeader: {
    flexDirection: 'row'
  },
  sliderTitle: {
    flex: 1,
    fontSize: 14
  },
  sliderValue: {
    fontSize: 14
  },
  filterControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  filterControl: {
    margin: 4
  }
});

class FilmFilterOptions extends Component {
  constructor(props) {
    super(props);
    this.state = this.pickFilterOptionsFromProps(props.filterOptions.active);
  }

  componentWillReceiveProps(newProps) {
    this.setState(
      this.pickFilterOptionsFromProps(newProps.filterOptions.active)
    );
  }

  pickFilterOptionsFromProps(props) {
    return pick(props, ['minRating', 'minYear']);
  }

  onRatingChange = rating =>
    this.setState({
      minRating: rating
    });

  onYearChange = year =>
    this.setState({
      minYear: year
    });

  applyFilter = () => this.props.applyFilter(this.state);

  resetFilter = () =>
    this.setState(
      this.pickFilterOptionsFromProps(this.props.filterOptions.original)
    );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterOptions}>
          <Text style={styles.title}>Filters</Text>
          <View style={styles.spacer} />
          {this.renderRatingSlider()}
          <View style={styles.spacer} />
          {this.renderYearSlider()}
          <View style={styles.spacer} />
        </View>
        <View style={styles.filterControlsContainer}>
          <Button
            style={styles.filterControl}
            title="Reset"
            onPress={this.resetFilter}
          />
          <Button
            style={styles.filterControl}
            title="Apply"
            onPress={this.applyFilter}
          />
        </View>
      </View>
    );
  }

  renderRatingSlider() {
    const { minRating } = this.state;
    const hasMinRating = minRating !== 0;

    return (
      <View style={styles.slider}>
        <View style={styles.sliderHeader}>
          {!hasMinRating && <Text style={styles.sliderTitle}>Any rating</Text>}
          {hasMinRating && (
            <Text style={styles.sliderTitle}>Rated at least:</Text>
          )}
          {hasMinRating && <Text style={styles.sliderValue}>{minRating}%</Text>}
        </View>
        <Slider
          value={minRating}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor={colors.$primary}
          onValueChange={this.onRatingChange}
        />
      </View>
    );
  }

  renderYearSlider() {
    const { minYear } = this.state;
    const currentYear = new Date().getFullYear();
    const hasMinYear = minYear !== null;

    return (
      <View style={styles.slider}>
        <View style={styles.sliderHeader}>
          {!hasMinYear && <Text style={styles.sliderTitle}>Any release</Text>}
          {hasMinYear && (
            <Text style={styles.sliderTitle}>Released on or after:</Text>
          )}
          {hasMinYear && <Text style={styles.sliderValue}>{minYear}</Text>}
        </View>
        <Slider
          value={minYear}
          minimumValue={1920}
          maximumValue={currentYear}
          step={1}
          minimumTrackTintColor={colors.$primary}
          onValueChange={this.onYearChange}
        />
      </View>
    );
  }
}

FilmFilterOptions.propTypes = {
  filterOptions: PropTypes.object,
  applyFilter: PropTypes.func,
  resetFilter: PropTypes.func
};

export default FilmFilterOptions;
