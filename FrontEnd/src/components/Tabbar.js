import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DayCaresList from './DayCaresList';
import Care from './DayCare'
import Login from './Login'

class TabNav extends Component {
  state = {  }

  render() { 
    return ( 
    <DayCaresList navigation={this.props.navigation}/>
     );
  }
}
 
   const TabNavigator = createBottomTabNavigator({
        List: TabNav,
        Register: Care},
        {
            
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
              labelStyle: {
                fontSize: 25,
              },
            },
            
          });
          
        //   const tab = createAppContainer(TabNavigator);
      
    export default createAppContainer(TabNavigator)
