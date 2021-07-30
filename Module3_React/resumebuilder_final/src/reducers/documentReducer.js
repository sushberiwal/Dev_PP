import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';
export default function documentReducer(state= initialState.document, action){
    console.log(action,state)
    switch(action.type){
        case actionTypes.SET_SKIN:
           return  update(state,{$set:action.document});
           case actionTypes.UPDATE_SKIN:
            return  update(state,{$merge:action.document});
        default:
             return state;  
    }
}