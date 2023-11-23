import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Component from './Component';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
