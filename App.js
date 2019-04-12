

import React, {Component} from 'react';
import {TextinText, View} from 'react-native';
import Login from './src/components/Login'
import DayCares from './src/components/DayCares'
import Register from './src/components/Register'

import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
    Login:Login,
    DayCares:DayCares,
    Register:Register
   
  });

class App extends Component {
  render() {
    return (
     <Login/>
    );
  }
}

App = AppNavigator;
export default createAppContainer(App);



