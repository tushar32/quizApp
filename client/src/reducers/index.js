import { combineReducers } from 'redux';
import alert from './alert';
import register from './authReducer';
import profile from './profile';

export default combineReducers({
    alert,
    register,
    profile
});