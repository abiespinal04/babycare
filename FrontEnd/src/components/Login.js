import React, { Component } from 'react';
import {TextInput,Text,View,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'




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
      const {textInputStyles} = styles 
        return ( 

            <View style={{alignSelf:'center',paddingTop:200}}>
          <View style={{alignSelf:'center'}}>
           <Image
          style={{width: 150, height: 160}}
          source={{uri: 'https://media.kidozi.com/unsafe/1200x1200/img.kidozi.com/img/28964047/100802,19,2,0,12,170.4,127.85325,21.3,30,d1375cd712ac9e9ff16afc148ca85c61/merchantimagenew/flag-2526328340-baby-onesies-black.jpg'}}
        />
        </View>
             <Card>
                <CardSection>
                <TextInput
                placeholder="Username"
                style={{fontSize:40}}
                onChangeText={(userName) => this.setState({userName:userName})}
                value={this.state.userName}
                style={textInputStyles}
                />
                </CardSection>
                <CardSection>
                  <TextInput
                  secureTextEntry={true}
                placeholder="Password"
                onChangeText={(password)=> this.setState({password})}
                value={this.state.password}
                style={{fontSize:40}}
                style={textInputStyles}
                />
                 </CardSection>
            </Card>
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
 
 styles = {
  textInputStyles:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    width:30,
    height:30
  }
 }

export default Login;