import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import MiniCard from "./MiniCard";

function MiniCards(props) {
  const {cardsObject, onEditCard, onDeleteCard} = props;

  const {cards} = cardsObject;

  const showMiniCards = (cards) => {
    let result = null;
    result = cards.map((card, id)=>{
      return <MiniCard 
        card={card} key={id} 
        onEditCard={(id, content)=>onEditCard(id, content)}
        onDeleteCard={(card)=>onDeleteCard(card)}
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
    onDeleteCard: (card) => {
      dispatch(actions.actDeleteCard(card));
    }, 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCards);