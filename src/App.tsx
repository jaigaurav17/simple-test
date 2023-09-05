/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import store from './redux/store';
import {Provider} from 'react-redux';

import MainNavigation from './navigation/MainNavigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <MainNavigation />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
