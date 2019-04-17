import React, { Component } from 'react';
import {TextInput,Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class DayCare extends Component {
    state = {  }
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
                />
                 <TextInput
                placeholder="Location"
                style={textInputStyles}
                />
                 <TextInput
                placeholder="Telephone"
                style={textInputStyles}
                />
                <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
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
        width:100
    },
    titleStyles : {
        fontSize:40,
        fontWeight:'bold'
    },
    viewStyles :{
        alignSelf:'center'
    }
}
export default DayCare;