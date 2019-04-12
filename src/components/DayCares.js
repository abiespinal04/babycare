import React, { Component } from 'react';
import {View, Text,FlatList} from 'react-native';
import MapView from 'react-native-maps'


class DayCares extends Component {
    state = {  }
    render() { 
        return ( 
            // <View>
            //     <FlatList
            //     data={}
            //     extraData={}
            //     renderItem={}
            //     />
            // </View>
            <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
         );
    }
}
 
export default DayCares;