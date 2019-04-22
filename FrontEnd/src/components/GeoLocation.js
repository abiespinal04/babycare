import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';



class GeoLocation extends Component {
    state = {
        // location: 'no location'
      }

      

    render() { 

        const { navigation } = this.props;
        const newItem = navigation.getParam('newItem', 'NO-ITEM');
        const newLocation = navigation.getParam('location', 'NO-LOCATION');

        return ( 

         <View style={{alignSelf:'center'}}>
             <Text style={{fontSize:30, paddingTop:15}}>
            {newLocation}
            </Text>
         </View>
            
         );
    }
}
 
export default GeoLocation;