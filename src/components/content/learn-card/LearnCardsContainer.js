import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import CustomMainFlashcard from "./CustomMainFlashcard";
import MainFlashcard from "./MainFlashcard";
import ControlMainFlashcard from "./ControlMainFlashcard";

function LearnCardsContainer(props) {
    const {cardsObject, onBackMainFlashcard, onNextMainFlashcard} = props;
    const {cards, cardFocus} = cardsObject;

    return (
    <div className="content-block">
        {/* custom main flashcard */}
        <CustomMainFlashcard/>
        {/* main flashcard */}
        <MainFlashcard 
            cardsObject={cardsObject}
        />
        {/* control card */}
        <ControlMainFlashcard 
            cardsObject={cardsObject}
            onBackMainFlashcard={() => onBackMainFlashcard()}
            onNextMainFlashcard={() => onNextMainFlashcard()}
        />
    </div>
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
        onBackMainFlashcard: () => {
            dispatch(actions.actBackMainFlashcard());
        },
        onNextMainFlashcard: () => {
            dispatch(actions.actNextMainFlashcard());
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LearnCardsContainer);