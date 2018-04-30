import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER,
    LOGIN_USER_FAIL
} from '../actions/type';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

/*
Reducer compare the old state with new state created .
If the two have same memory address, then it assumes no
changes have been done, else it report change and goes
for update.
*/

/*To send the updated state back to component we use
mapStateToProps method */

export default (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case EMAIL_CHANGED:
        /* create new object (...)and take all the properties of 
        existing object and define new property email and put it on 
        top of new object.*/
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
         return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, 
                ...INITIAL_STATE,
                user: action.payload, 
            };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', loading: false };
        default:
            return state;
    }
};
