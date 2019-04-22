import React, { Component } from 'react';
import {TextInput,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import axios from 'axios'
import * as actions from '../actions'



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
   
        this.props.addDaycare(this.state)
    }


    render() { 

        
        const{textStyles,titleStyles,viewStyles,textInputStyles} = styles
        return ( 

            <View>
            <View style={viewStyles}>
                
                <Text style={titleStyles}>Register Daycare</Text>
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
                >
                    <Text>Summit</Text>
                </TouchableOpacity>
                </View>
              </View>
         );
    }
}
 
const styles = {
    textInputStyles:{
        paddingTop: 5,
        paddingBottom: 5,
        width:100,
        borderColor: '#47CAFF',
        borderBottomWidth: 3
    },
    titleStyles : {
        fontSize:40,
        fontWeight:'bold'
    },
    viewStyles :{
        alignSelf:'center'
    }
}

const mapStateToProps = (state) =>{

    return{Daycare:{}}
}

export default connect(mapStateToProps,actions)(DayCare);