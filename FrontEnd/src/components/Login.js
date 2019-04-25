import React, { Component } from 'react';
import {Modal,TextInput,Text,View,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'




class Login extends Component {
    state = {
      email: '',
      password:''
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

     handleLogin = async () =>{
     
      const{data} = await axios.post("http://localhost:3000/user/login", this.state);
      console.log("Login")
      if(data.message === "Auth sucessful"){
        this.props.navigation.navigate('TabNav')
        // this.setState({userName:'',password:''})
      } else {

      }
     
    }

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
                placeholder="Email:anthony123@gmail.com"
 
                style={textInputStyles}
                onChangeText={email => this.setState({email})}
                value={this.state.userName}
               
                />
                </CardSection>
                <CardSection>
                  <TextInput
                  secureTextEntry={true}
                placeholder="Password"
                style={textInputStyles}
                onChangeText={password=> this.setState({password})}
                value={this.state.password}
        
                />
                 </CardSection>
            </Card>
                <View style={{flexDirection:'row'}}>
                <Button
                style={{paddingRight:35}}
                // onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                // onPress={() => this.handleTest}
                // onPressOut={() => this.setState({userName:''})}
                onPress={ () => this.handleLogin () }
             
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