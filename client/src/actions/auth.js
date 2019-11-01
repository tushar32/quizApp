import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_FAILED,
    LOGIN_SUCCESS
} from '../actions/types';
import { setAlert } from './alert';

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

console.log('localStorage.token',localStorage.token);


export const loadUser = () => async dispatch => {

    if(localStorage.token){
        //setAuthToken will set the token in the header to send to /api/login
        // It's helper function
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth');
        
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
       
    } catch (error) {
        dispatch({
            type: AUTH_FAILED,
        })
    }

}
export const register = ({ name,email,password }) => async dispatch => {
    const options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ name,email,password });

    try {
        const res = await axios.post('/api/users', body, options)

        dispatch({
            type:REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
        }
        dispatch({
            type:REGISTER_FAIL,
        });
    }
}

export const login = ({ email,password }) => async dispatch => {
    const options = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify({ email,password });

    try {
        const res = await axios.post('/api/auth/login', body, options)

        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')));
        }
        
        dispatch({
            type:AUTH_FAILED,
        });
    }
}