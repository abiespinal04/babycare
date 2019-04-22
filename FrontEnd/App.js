

import React, {Component} from 'react';
import {TextinText, View} from 'react-native';
import Login from './src/components/Login'
import DayCaresList from './src/components/DayCaresList'
import Care from './src/components/DayCare'
import Register from './src/components/Register'
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import TabNav from './src/components/Tabbar'
import DatailScren from './src/components/DetailScreen'
import GeoLocation from './src/components/GeoLocation'
import {createStore} from 'redux';

import {createAppContainer,createStackNavigator} from 'react-navigation'



const AppNavigator = createStackNavigator({
    Login:Login,
    DayCares:DayCaresList,
    TabNav: TabNav,
    Register:Register,
    Care: Care,
    DatailScren:DatailScren,
    GeoLocation: GeoLocation
  });

const AppContainer = createAppContainer(AppNavigator);



class App extends Component {


  
  render() { 
    return ( 
    
  <Provider store={createStore(reducers)}>
    <AppContainer/>
    </Provider>
     );
    
  }
}

export default App;
