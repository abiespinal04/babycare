import React, { Component } from 'react';
import {View, Text,TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import MapView from 'react-native-maps'


class DayCares extends Component {
    state = { 
        data: null,
        refreshing:true 
    }

    async componentDidMount(){

        const {data} = await axios.get("http://localhost:3000/products");
        console.log(data)
        return this.setState({data})
      }

    //   componentDidUpdate(){
    //       this.state({data:this.state.data})
    //   }
      addDayCare = async() => {
          const obj = {name: 'Abimael Book', price: 100}
          const{data} = await axios.post("http://localhost:3000/products", obj)
          const datas = [...this.state.data,data]
          this.setState({data:datas});
        }
    render() { 
        return ( 
            <View>
                <FlatList
                data={this.state.data}
                extraData={this.state.refreshing}
                renderItem={({item}) => 
                <View>
                    <Text style={{fontSize:25, fontWeight:'bold'}}>{item.name}
                    </Text>
                    <Text>Price: {item.price}$</Text>
                </View>}
                keyExtractor={item => item._id }
                
                />
                <View style={{alignSelf:'center'}}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Care')}
                style={{borderColor:'#47CAFF',borderBottomWidth:1,borderTopWidth:1}}
                >
                <Text style={{fontSize:25}}>+ Daycare</Text>
                </TouchableOpacity>
                </View>
            </View>
    //         <MapView
    //     style={{flex: 1}}
    //     region={{
    //       latitude: 42.882004,
    //       longitude: 74.582748,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421
    //     }}
    //     showsUserLocation={true}
    //   />
         );
    }
}
 
export default DayCares;