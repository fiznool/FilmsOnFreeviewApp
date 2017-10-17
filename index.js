import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import moment from 'moment';

moment.updateLocale('en', {
  longDateFormat : {
    LT: "h:mma",
  }
});

import App from './src/app';

const domain = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

const networkInterface = createNetworkInterface({
  uri: `https://filmsonfreeview.herokuapp.com/graphql`
});

const client = new ApolloClient({
  networkInterface
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

AppRegistry.registerComponent('FilmsOnFreeviewApp', () => ApolloApp);