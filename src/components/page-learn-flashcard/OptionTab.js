import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function OptionTab(props) {
    const {tab, idCurrentTab, onChangeCurrentTab, key} = props;
    const {name, icon, id} = tab;

  return (
    <p 
        className={
            idCurrentTab===id
            ?"options-content active"
            :"options-content"}
        onClick={() => onChangeCurrentTab(id)}
        key={key}
    >
        {icon.map((iconItem, id)=>{
            return <i className={iconItem} key={id}/>;
        })}
        {name} 
    </p>
  );
}
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        idCurrentTab: state.tab,  
    };
  }
  /* Chuyen action thanh props cua component nay */
  const mapDispatchToProps = (dispatch, props) => {
    return {
      onChangeCurrentTab: (id) => {
        dispatch(actions.actChangeCurrentTab(id));
    },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(OptionTab);