import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/actionTypes';
import { bindActionCreators } from 'redux';
import * as  documentActions from '../../actions/documentActions'
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
function GettingStarted(props) {
     let history = useHistory();
     const onChange = async (skinCd) => {
        if(props.document.id){
             props.updateDocument(props.document.id, skinCd);        
        }
        else{
             props.setDocument(skinCd); 
        }
        history.push('/contact');
      }
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className="center">
                    Select a resume template to get started</h1>
                    <p className="center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == props.document.skinCd? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  
const mapStateToProps=(state)=>{
    return {
        document: state.document
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        setDocument : (skinCd)=>dispatch(documentActions.setSkinCd(skinCd)),
        updateDocument : (id,skinCd)=>dispatch(documentActions.updateSkinCd(id,skinCd))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GettingStarted))

