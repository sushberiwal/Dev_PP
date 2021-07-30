import * as actionTypes from './actionTypes';
const { v4: uuidv4 } = require('uuid');
export const add=(documentId, contactSection)=>{
    return  {type: actionTypes.ADD_CONTACT, contactSection:contactSection}
}
export const update=(documentId, contactSection)=>{
    return  {type: actionTypes.UPDATE_CONTACT, contactSection:contactSection}
    
}