import { combineReducers } from 'redux';
import alert from './alert';
import register from './authReducer';

export default combineReducers({
    alert,
    register
});