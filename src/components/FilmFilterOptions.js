import React, { PureComponent } from 'react';
import { Button, View, Text, StyleSheet, Slider } from 'react-native';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  filterOptions: {
    flex: 1
  }
});

class FilmFilterOptions extends PureComponent {
  constructor(props) {
    super(props);

    this.state = pick(props.filterOptions, [
      'maxScore',
      'minYear',
      'maxYear',
      'channels'
    ]);
  }

  onRatingChange = rating =>
    this.setState({
      maxScore: rating
    });

  applyFilter = () => this.props.applyFilter(this.state);

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterOptions}>
          <Text>Set Minimum Rating</Text>
          <Slider
            value={this.state.maxScore}
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={this.onRatingChange}
          />
          <Text>{this.state.maxScore}</Text>
        </View>
        <Button title="Apply" onPress={this.applyFilter} />
      </View>
    );
  }
}

FilmFilterOptions.propTypes = {
  filterOptions: PropTypes.object,
  applyFilter: PropTypes.func
};

export default FilmFilterOptions;
