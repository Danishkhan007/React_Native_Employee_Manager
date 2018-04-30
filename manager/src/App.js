/*
 * @Author: Mohd Danish Khan 
 * @Date:2018-04-22
 *  
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunx from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentDidMount() {
    const config = {
        apiKey: 'AIzaSyABw1X78Jo2wot9frn4KqutaOegZszP36k',
        authDomain: 'managerrn-4e346.firebaseapp.com',
        databaseURL: 'https://managerrn-4e346.firebaseio.com',
        projectId: 'managerrn-4e346',
        storageBucket: 'managerrn-4e346.appspot.com',
        messagingSenderId: '436015947092'
      };
      firebase.initializeApp(config);
    }


    render() {
        //applymidleware is store enhencer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunx));
            /* connects different connect tags and insure the 
            get access to store grab all state and pass */
        return (

           <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
