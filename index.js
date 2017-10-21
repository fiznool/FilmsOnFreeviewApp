import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import moment from 'moment';

moment.updateLocale('en', {
  longDateFormat : {
    LT: "h:mma",
  }
});

import App from './src/app';
import { reducer as filterReducer } from './src/store/filter';

const isDev = __DEV__;

const networkInterface = createNetworkInterface({
  uri: `https://filmsonfreeview.herokuapp.com/graphql`
});

const client = new ApolloClient({
  networkInterface
});

const rootReducer = combineReducers({
  apollo: client.reducer(),
  filter: filterReducer
});

const middlewares = [
  client.middleware()
];

if(isDev) {
  middlewares.push(logger);
}

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares)
));

const ApolloApp = () => (
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent('FilmsOnFreeviewApp', () => ApolloApp);