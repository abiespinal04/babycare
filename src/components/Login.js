import React, { Component } from 'react';
import {TextInput,Text,View,TouchableOpacity,Image} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


class Login extends Component {
    state = {  }


    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#47CAFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    render() { 
        return ( 

            <View style={{alignSelf:'center',paddingTop:200}}>

           <Image
          style={{width: 150, height: 160}}
          source={{uri: 'https://media.kidozi.com/unsafe/1200x1200/img.kidozi.com/img/28964047/100802,19,2,0,12,170.4,127.85325,21.3,30,d1375cd712ac9e9ff16afc148ca85c61/merchantimagenew/flag-2526328340-baby-onesies-black.jpg'}}
        />
                <TextInput
                placeholder="Username"
                style={{fontSize:40}}
                />
                  <TextInput
                placeholder="Password"
                style={{fontSize:40}}
                />
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                style={{paddingRight:35}}
                onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                >
                    <Text style={{fontSize:20, fontWeight:'bold'}}>
                        Login
                    </Text>
          
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Register')}
                >
                <Text style={{fontSize:20, fontWeight:'bold'}}>
                        Register
                    </Text>
                </TouchableOpacity>
                </View>
            </View>

         );
    }
}
 
export default Login;