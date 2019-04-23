import React, { Component } from 'react';
import {View,Text} from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DayCaresList from './DayCaresList';
import Care from './DayCare'

import DrawerNav from './DrawerNav'

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
              activeTintColor: 'lightblue',
              inactiveTintColor: 'black',
              labelStyle: {
                fontSize: 25,
              },
              
            },
           
            
          });
          
        //   const tab = createAppContainer(TabNavigator);
      
    export default createAppContainer(TabNavigator)
