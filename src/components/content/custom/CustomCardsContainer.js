import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import EditCard from "./EditCard";
import MiniCards from "./MiniCards";
import CreateCard from "./CreateCard";

function CustomCardsContainer(props) {
  const {edit_card, onCreateEditBox} = props;

  const {isEditing} = edit_card;

  return (
  <div className="content-block">
    {isEditing===-1 ? null : 
    <EditCard />}
    <div className="minicard-container">
      {isEditing===0 ? null : 
      <CreateCard
        onCreateEditBox={()=>onCreateEditBox()}
      />}
      <MiniCards />
    </div>
  </div>
  );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
      edit_card: state.edit_card,
    };
  }
  /* Chuyen action thanh props cua component nay */
  const mapDispatchToProps = (dispatch, props) => {
    return {
      onCreateEditBox: () => {
        dispatch(actions.actCreateEditBox());
      },  
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomCardsContainer);