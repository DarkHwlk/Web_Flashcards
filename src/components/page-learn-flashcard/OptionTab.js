import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../actions/index';

function OptionTab(props) {
    const {tab, idCurrentTab, onChangeCurrentTab, onResetCardFocus, key} = props;
    const {name, icon, id} = tab;

    const onClickTab = (id) => {
      onChangeCurrentTab(id);
      onResetCardFocus();  //Reset cardFocus is the first card 
    }

  return (
    <p 
        className={
            idCurrentTab===id
            ?"options-content active"
            :"options-content"}
        onClick={() => onClickTab(id)}
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
      onResetCardFocus: () => {
        dispatch(actions.actResetCardFocus());
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(OptionTab);