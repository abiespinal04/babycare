import React, { Component } from 'react';
import {View,Text} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Card from './common/Card'



class Register extends Component {
    state = {  }

    static navigationOptions = {
        title:'Register',
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
            
            <Card>
   
            <View style={{alignSelf:'center',paddingTop:60}}>
               <Text style={{fontSize:20,fontWeight:'bold'}}>FirstName</Text>
                <TextInput 
                placeholder='First Name'
                style={{fontSize:20,paddingBottom:10}}
                />
                 <Text style={{fontSize:20,fontWeight:'bold'}}>LastName</Text>
                 <TextInput
                placeholder='Last Name'
                style={{fontSize:20,paddingBottom:10}}
                />
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Email</Text>
                 <TextInput
                placeholder='email'
                style={{fontSize:20,paddingBottom:10}}
                />
                 <Text style={{fontSize:20,fontWeight:'bold'}}>Password</Text>
                 <TextInput
                placeholder='password'
                style={{fontSize:20,paddingBottom:10}}
                />
            </View>
            </Card>
         );
    }
}
 
export default Register;