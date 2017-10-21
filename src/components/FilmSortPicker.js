import React, { Component } from 'react';
import { Modal, Picker, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../theme/colors';

const pickerOptions = [{
  label: 'Best Score',
  value: 'score:high-low'
}, {
  label: 'Latest Showtime',
  value: 'showtime:low-high'
}]

class FilmSortPicker extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedValue: props.selectedValue.value
    }
  }

  onValueChange = (itemValue) => {
    this.setState({ selectedValue: itemValue });
  }

  onAndroidValueChange = (itemValue, idx) => {
    this.onValueChange(itemValue);
    this.props.onValueChange(pickerOptions[idx]);
  }

  renderAndroid() {
    return (
      <View style={[this.props.style, styles.containerAndroid]}>
        <Text style={styles.title}>Sort By:</Text>
        <Picker
          style={styles.pickerAndroid}
          selectedValue={this.state.selectedValue}
          onValueChange={this.onAndroidValueChange}>
          {pickerOptions.map((opt, idx) => {
            return (
              <Picker.Item key={idx} label={opt.label} value={opt.value} />
            );
          })}
        </Picker>
      </View>
    );
  }

  renderIOS() {
    return (<View />);
  }

  render() {
    console.log('rendering...');
    return Platform.OS === 'android' ? this.renderAndroid() : this.renderAndroid();
  }
}

FilmSortPicker.defaultProps = {
  selectedValue: pickerOptions[0],
  onValueChange: () => {}
};

const styles = StyleSheet.create({
  containerAndroid: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    color: colors.$accent
  },
  pickerAndroid: {
    color: colors.$accent,
    flex: 1
  }
});


export default FilmSortPicker;