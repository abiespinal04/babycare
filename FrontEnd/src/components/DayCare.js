import React, { Component } from 'react';
import {TextInput,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import axios from 'axios'
import * as actions from '../actions'
import Button from './common/Button'
import Card from './common/Card'
import CardSection from './common/CardSection'


class DayCare extends Component {
    state = { 
        name:'',
        location:'',
        telephone: ''
     }


    handleDaycare = (daycare) => {
        let newDaycare = this.state.daycare;
        newDaycare = daycare
        this.setState({name:newDaycare});
    }

    handleLocation = (location) => {
        let newLocation = this.state.location;
        newLocation = location
        this.setState({location:newLocation});
    }

    handleTelephone = (telephone) => {
        let newTelephone = this.state.telephone;
        newTelephone = telephone
        this.setState({telephone:newTelephone});
    }

    handleRegistration = async () => {
       
        // const {Daycare} = this.props
        // console.log(Daycare)
      //   console.log(this.props.TabConfig)
        const{data} = await axios.post("http://localhost:3000/products", this.state)
        // const {d} =await axios.get("http://localhost:3000/products")
      console.log(data)
       
    }
   async componentDidMount(){
    const{data} = await axios.get("http://localhost:3000/products")
    this.props.addDaycare(data)
    }

    
    render() { 

        
        const{buttonTextStyle,buttonStyle,textStyles,titleStyles,viewStyles,textInputStyles} = styles
        return ( 

            <View style={{flex:1}}>
            <View style={viewStyles}>
                <Card>
                <CardSection>
                <Text style={titleStyles}>Register Daycare</Text>
                </CardSection>
                </Card>
            </View>
            <View style={viewStyles}>
           
            <TextInput
                placeholder="Daycare Name"
                style={textInputStyles}
                onChangeText={(daycare)=> this.handleDaycare(daycare)}
                />
          
          
                 <TextInput
                placeholder="Location"
                style={textInputStyles}
                onChangeText={(location)=> this.handleLocation(location)}
                />
              

               
                 <TextInput
                placeholder="Telephone"
                style={textInputStyles}
                onChangeText={(telephone)=> this.handleTelephone(telephone)}
                />
             
                <TouchableOpacity
                onPress={() => this.handleRegistration()}
                onPressOut={() => this.props.navigation.goBack()}
                style={buttonStyle}
           >
                    <Text style={buttonTextStyle}>Summit</Text>
                </TouchableOpacity>
                </View>
              </View>
         );
    }
}
 
const styles = {
    textInputStyles:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        width:130,
        height:30
        // borderColor: '#47CAFF',
        // borderBottomWidth: 3
    },
    titleStyles : {
        fontSize:40,
        fontWeight:'bold',
    
    },
    buttonTextStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      
    },
    buttonStyle:{
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
      
    },
    viewStyles :{
        alignSelf:'center',
        
    }
}

const mapStateToProps = (state) =>{

    return{Daycare:{}}
}

export default connect(mapStateToProps,actions)(DayCare);