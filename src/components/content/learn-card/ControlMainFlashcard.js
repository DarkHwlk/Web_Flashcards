import React, {useState} from "react";
import {connect} from 'react-redux';

/* components */

function ControlMainFlashcard(props) {
    const {cardsObject,  onBackMainFlashcard, onNextMainFlashcard} = props;
    const {cards, cardFocus} = cardsObject;

    return (
    <div className="control-main-flashcard">
        <div>
            <i className='fas fa-arrow-left'
               onClick={() => onBackMainFlashcard()}
            /> 
            <span>{cardFocus.id}/{cards.length}</span>
            <i  className='fas fa-arrow-right'
                onClick={() => onNextMainFlashcard()}
            /> 
            <i className='fas fa-expand-arrows-alt flex-end'/> 
        </div>
    </div>
  );
}

export default ControlMainFlashcard;