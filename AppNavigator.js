import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
  import Home from './Home';
  import Friends from './Friends';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends}
  });

  export default createAppContainer(AppNavigator);