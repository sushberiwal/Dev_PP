import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';
export default function contactReducer(state= initialState.contactSection, action){
    switch(action.type){
        case actionTypes.ADD_CONTACT:
           return  update(state,{$set:action.contactSection});
        case actionTypes.UPDATE_CONTACT:
           return  update(state,{$merge:action.contactSection});
        default:
             return state;
        
    }
}