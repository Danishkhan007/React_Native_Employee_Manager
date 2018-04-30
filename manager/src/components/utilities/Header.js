/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-20
 *  
 */

//Import libraries for making the component
import React from 'react';
import { Text, View } from 'react-native';


//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
   return ( 
    <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText} </Text>
    </View>
 );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8AAB8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make the component available to other parts of the app
export { Header };
