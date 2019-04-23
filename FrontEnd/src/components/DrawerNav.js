import React, { Component } from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Login from './Login';
import TabNav from './Tabbar'

class DrawerNav extends Component {
    state = {  }
    render() { 
        // return ( <TabNav/> );
    }
}
 

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Login
    }
  });
  

  export default createAppContainer(MyDrawerNavigator);