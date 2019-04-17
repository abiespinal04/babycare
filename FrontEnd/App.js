

import React, {Component} from 'react';
import {TextinText, View} from 'react-native';
import Login from './src/components/Login'
import DayCares from './src/components/DayCaresList'
import Care from './src/components/DayCare'
import Register from './src/components/Register'
import reducers from './src/reducers';
import Provider from 'react-redux';
import {createStore} from 'redux';

import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
    Login:Login,
    DayCares:DayCares,
    Register:Register,
    Care: Care
  });

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
     <Login/>
     </Provider>
    );
  }
}

App = AppNavigator;
export default createAppContainer(App);



