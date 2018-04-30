/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-22
 *  
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './utilities';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';


/* application level state or component level state 
Redux is application level state. Means all the value changes 
and validation are set and stored at application level state. */

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ 
            name, phone, shift: shift || 'Monday' 
        });
    }

    render() {
        console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                     Create
                    </Button>
                </CardSection>
            </Card>
        );
    }   
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);
