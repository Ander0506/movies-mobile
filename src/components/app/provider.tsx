import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {store} from '../app/store';

import App from './App';

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <StatusBar animated={true} backgroundColor="#5ca0d3" />
      <App />
    </Provider>
  );
};

export default ProviderApp;
