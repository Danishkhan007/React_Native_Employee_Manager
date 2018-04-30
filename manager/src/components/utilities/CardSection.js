/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-20
 *  
 */

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[Style.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const Style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#bcd2e3',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#b8b8b8',
        position: 'relative'
    }
};

export { CardSection };
