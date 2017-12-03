import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import moment from 'moment';

moment.updateLocale('en', {
  longDateFormat: {
    LT: 'h:mma'
  }
});

import App from './src/app';
import { reducer as filterReducer } from './src/store/filter';
import {
  reducer as filmsReducer,
  actionCreators as filmsActionCreators
} from './src/store/films';

const rootReducer = combineReducers({
  filter: filterReducer,
  films: filmsReducer
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// Fetch films when we begin the app
store.dispatch(filmsActionCreators.fetchFilms());

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('FilmsOnFreeviewApp', () => ReduxApp);
