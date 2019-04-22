import React, { Component } from 'react';
import {View,Text} from 'react-native';


class MapAddress extends Component {
    state = {  }
    render() { 

    const { navigation } = this.props;
    const newItem = navigation.getParam('newItem', 'NO-ITEM');
    
        return ( 
          
            <View>
                <Text style={{alignSelf:'center',paddingTop:60}}>
                 {newItem.name}
                </Text>
                 <Text style={{alignSelf:'center',paddingTop:60}}>
                 {newItem.location}
                </Text>
                 <Text style={{alignSelf:'center',paddingTop:60}}>
                 {newItem.telephone}
                </Text>
            </View>

         );
    }
}
 
export default MapAddress;