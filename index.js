import React from 'react';
import { AppRegistry } from 'react-native';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import App from './src/app';

const networkInterface = createNetworkInterface({
  uri: `http://10.0.2.2:5000/graphql`
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