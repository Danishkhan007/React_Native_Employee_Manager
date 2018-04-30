/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-20
 *  
 */

import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
    <View style={Styles.containerStyle}>
        { props.children }
     </View>
    );
};

const Styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#b8b8b8',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
