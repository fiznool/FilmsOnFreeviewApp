import { StackNavigator } from 'react-navigation';

import FilmListScreen from './screens/FilmListScreen';
import FilmDetailsScreen from './screens/FilmDetailScreen';
import FilmFilterModal from './screens/FilmFilterModal';

const MainScreens = StackNavigator({
  FilmListScreen: { screen: FilmListScreen },
  FilmDetailScreen: { screen: FilmDetailsScreen }
}, {
  mode: 'card',
  headerMode: 'none',
});

const RootNavigator = StackNavigator({
  HomeScreen: { screen: MainScreens },
  FilterScreen: { screen: FilmFilterModal },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;