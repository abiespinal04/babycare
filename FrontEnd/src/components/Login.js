import React, { Component } from 'react';
import {TextInput,Text,View,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import Button from './common/Button'




class Login extends Component {
    state = {
        userName: '',
        password: ''
    }


    static navigationOptions = {
        title: 'Login',
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
                onChangeText={(userName) => this.setState({userName:userName})}
                value={this.state.userName}
                />
                  <TextInput
                  secureTextEntry={true}
                placeholder="Password"
                onChangeText={(password)=> this.setState({password})}
                value={this.state.password}
                style={{fontSize:40}}
                />
                <View style={{flexDirection:'row'}}>
                <Button
                style={{paddingRight:35}}
                // onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                // onPress={() => this.handleTest}
                // onPressOut={() => this.setState({userName:''})}
                onPress={() => this.props.navigation.navigate('TabNav')}

                >
                    
                        Login
                    
          
                </Button> 
                <Button
                  onPress={() => this.props.navigation.navigate('Register')}
                >
                
                        Register
                 
                </Button>
               
                  
                </View>
            
            </View>

         );
    }
}
 
export default Login;