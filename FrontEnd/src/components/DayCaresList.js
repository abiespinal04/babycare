import React, { Component } from 'react';
import {View, Text,TouchableOpacity,ScrollView, FlatList} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Care from './DayCare';
import axios from 'axios';
import MapView from 'react-native-maps'
import Login from './Login'
import Tabbar from './Tabbar';
import {connect} from 'react-redux'
import Card from './common/Card'
import CardSection from './common/CardSection'



class DayCaresList extends Component {
    state = { 
        data: null,
        
    }


    async componentDidMount(){

        const {data} = await axios.get("http://localhost:3000/products");
        // console.log(data)
        return this.setState({data})
      }

    //   async componentDidUpdate(){
    //     const {data} = await axios.get("http://localhost:3000/products");
    //     // console.log(data)
    //     return this.setState({data})
    //   }
 

    
    //   addDayCare = async() => {
    //       const {Daycare} = this.props
    //       console.log(Daycare)
    //     //   console.log(this.props.TabConfig)
    //       const{data} = await axios.post("http://localhost:3000/products", Daycare)
    //       const datas = [...this.state.data,data]
    //       this.setState({data:datas});
    //     }
    render() { 
       
        
        return ( 
            
            <View style={{flex:1}}>
                <ScrollView>
                <FlatList
                data={this.state.data}
                extraData={this.state}
                renderItem={({item}) => 
                <View>
                   <Card>
                       <CardSection>
                    <Text style={{fontSize:25, fontFamily:'Baskerville-Bold' ,fontWeight:'bold'}}>{item.name}
                    </Text>
                    </CardSection>

                    <Text>Addres:</Text> 
                    <TouchableOpacity>
                    <Text>{item.location}</Text>
                    </TouchableOpacity>
                    <Text>Phone:</Text>
                    <TouchableOpacity>
                    <Text>{item.telephone}</Text>
                    </TouchableOpacity>
                    </Card>
                </View>}
                keyExtractor={item => item._id }
                
                />
                </ScrollView>
                {/* <View style={{alignSelf:'center'}}>
                <TouchableOpacity
                onPressIn ={() => this.addDayCare()}
                onPressOut={() => this.props.navigation.navigate('Care')}
                style={{borderColor:'#47CAFF',borderBottomWidth:1,borderTopWidth:1}}
                >
                <Text style={{fontSize:25}}>+ Daycare</Text>
                </TouchableOpacity>
                </View> */}
               
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
    const mapStateToProps = (state) => {
        console.log("Test",state.Daycare);
        return{Daycare: state.Daycare}
    }
  

    export default connect(mapStateToProps)(DayCaresList)

   