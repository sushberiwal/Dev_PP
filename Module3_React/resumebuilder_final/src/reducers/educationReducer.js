import * as actionsCodes from '../actions/actionTypes'
import update from 'immutability-helper';
import initialState from './initialState.json'
export default function educationReducer(state = initialState.educationSection, action) {
    switch (action.type) {
       case actionsCodes.ADD_EDUCATION:
            return update(state,  { $set: action.educationSection  } );
        case actionsCodes.UPDATE_EDUCATION:
            return update(state,  { $merge: action.educationSection  });
       default: return state;
    }  
}