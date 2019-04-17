

import React, {Component} from 'react';

import Login from './src/components/Login'
import DayCares from './src/components/DayCaresList'
import Care from './src/components/DayCare'
import Register from './src/components/Register'
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {createAppContainer,createStackNavigator} from 'react-navigation'



const AppNavigator = createStackNavigator({
    Login:Login,
    DayCares:DayCares,
    Register:Register,
    Care: Care
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
