import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {colors} from '../theme';

const FilmFilterModal = ({ navigation }) => {
  const dismissModal = () => {
    navigation.dismiss();
  }
  return (
    <View style={styles.container}>
      <View style={styles.filterOption}>
        <Text>There will soon be some filter options here.</Text>
      </View>
      <Button onPress={dismissModal} title="Apply" />
    </View>
  );
};

FilmFilterModal.navigationOptions = {
  title: 'Filter'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 12,
    backgroundColor: colors.$white,
  },
  filterOption: {
    flex: 1
  }
});

export default FilmFilterModal