import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import {colors} from './theme';
import FilmListScreen from './screens/FilmListScreen';
import FilmDetailsScreen from './screens/FilmDetailScreen';
import FilmFilterModal from './screens/FilmFilterModal';

function forVertical(props) {
  const { layout, position, scene } = props;
  const index = scene.index;
  const height = layout.initHeight;

  const first = index - 1;
  const last = index + 1;

  const translateX = 0;
  const translateY = position.interpolate({
    inputRange: [first, index, last],
    outputRange: [height, 0, 0]
  });

  const opacity = position.interpolate({
    inputRange: [first, index, last],
    outputRange: ([0.4, 1, 0.4]),
});

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  };
}

function DismissableStackNavigator(routes, options) {
  const StackNav = StackNavigator(routes, options);

  return class DismissableStackNav extends Component {
    static router = StackNav.router;

    render() {
      // eslint-disable-next-line react/prop-types
      const { state, goBack } = this.props.navigation;
      const nav = {
        ...this.props.navigation,
        dismiss: () => goBack(state.key),
      };
      return (
        <StackNav
          navigation={nav}
        />
      );
    }
  }
}


const MainStack = StackNavigator({
  FilmListScreen: { screen: FilmListScreen },
  FilmDetailScreen: { screen: FilmDetailsScreen }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.$primary
    },
    headerTintColor: colors.$white
  }
});

const FilterModalStack = DismissableStackNavigator({
  FilterScreen: { screen: FilmFilterModal },
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'transparent'
  },
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: 'transparent'
    }
  })
});

const RootNavigator = StackNavigator({
  Home: { screen: MainStack },
  FilterModal: { screen: FilterModalStack },
}, {
  mode: 'modal',
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'transparent'
  },
  transitionConfig: () => ({
    screenInterpolator: forVertical,
  })
});

export default RootNavigator;