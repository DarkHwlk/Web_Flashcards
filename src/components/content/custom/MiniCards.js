import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import MiniCard from "./MiniCard";

function MiniCards(props) {
  const {cardsObject, onEditCard} = props;

  const {cards} = cardsObject;

  const showMiniCards = (cards) => {
    let result = null;
    result = cards.map((card, id)=>{
      return <MiniCard 
        card={card} key={id} 
        onEditCard={(id, content)=>onEditCard(id, content)}
      />;
    });
    return result;
  }

    return (
    <>
      {showMiniCards(cards)}
    </>
  );
}
 
/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
  return { 
    cardsObject: state.cards,
  };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
  return {
    onEditCard: (id, content) => {
      dispatch(actions.actEditCard(id, content));
    },  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCards);