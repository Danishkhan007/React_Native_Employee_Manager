/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-22
 *  
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './utilities';

class LoginForm extends Component {

//Callbacks.
onEmailChange(text) {
    //calling the action creater
   emailChanged(text);
}

onPasswordChange(text) {
    //calling the action creater
    this.props.passwordChanged(text);
}

onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
}

renderError() {
    if (this.props.error) {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
        );
    }
}

renderButton() {
    if (this.props.loading) {
        return <Spinner size="large" />;
    }

    return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Login
        </Button>
    );
}

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        //set the event handler with callback.
                        onChangeText={this.onPasswordChange.bind(this)}
                        placeholder="password"
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()};

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {  passwordChanged, loginUser })(LoginForm);
