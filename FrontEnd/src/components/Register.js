import React, { Component } from 'react';
import {View,Text,ToastAndroid} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Card from './common/Card'
import CardSection from './common/CardSection'
import Button from './common/Button'
import axios from 'axios'





class Register extends Component {
    state = {  
      email: '',
      password:''
    }

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
    
      handleRegister = async () => {

        const{data} = await axios.post("http://localhost:3000/user/signup", this.state)
        console.log(data)
        if(data.message === "User created"){
          this.props.navigation.navigate('TabNav')
        } else if( data.message === "Email exists"){
            console.log("Email exists")
        }
      }

    render() { 
      const {textInputStyles} = styles 
        return ( 
            
            
   
            <View style={{alignSelf:'center',paddingTop:60}}>
               {/* <Text style={{fontSize:20,fontWeight:'bold'}}>FirstName</Text>
                <TextInput 
                placeholder='First Name'
                style={{fontSize:20,paddingBottom:10}}
                />
                 <Text style={{fontSize:20,fontWeight:'bold'}}>LastName</Text>
                 <TextInput
                placeholder='Last Name'
                style={{fontSize:20,paddingBottom:10}}
                /> */}
                <Card>
                  <CardSection>
                 <Text style={textInputStyles}>Email</Text>
                 </CardSection>
                 <CardSection>
                 <TextInput
                placeholder='email'
                style={{fontSize:20,paddingBottom:10}}
                onChangeText={email => this.setState({email})}
                style={textInputStyles}
                />
                </CardSection>
                <CardSection>
                 <Text style={textInputStyles}>Password</Text>
                 </CardSection>
                 <CardSection>
                 <TextInput
                 secureTextEntry={true}
                placeholder='password'
                style={{fontSize:20,paddingBottom:10}}
                onChangeText={password => this.setState({password})}
                style={textInputStyles}
                />
                </CardSection>
                   </Card>
                <View style={{flexDirection:'row'}}>
               <Button
               onPress={()=> this.handleRegister()}
               >
                 Summit
               </Button>
              
               </View> 
            
            </View>
          
         );
    }
}
 styles = {
  textInputStyles:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    width:300,
    height:30
  }
 }
export default Register;