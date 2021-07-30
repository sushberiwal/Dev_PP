import * as actionTypes from './actionTypes';
export const add=(documentId, educationSection)=>{
    return {type: actionTypes.ADD_EDUCATION, educationSection:educationSection}
}
export const update=(documentId, educationSection)=>{
    return {type: actionTypes.UPDATE_EDUCATION, educationSection:educationSection} 
}