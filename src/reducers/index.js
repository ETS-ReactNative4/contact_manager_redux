// file for root reducer i.e. meeting place for all reducers
import {combineReducers} from 'redux';
import contactReducer from './contactReducer.js';

export default combineReducers(
  {
    contact: contactReducer
  }
);
