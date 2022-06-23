import React, {useState} from "react";
import {connect} from 'react-redux';

/* components */

function MainFlashcard(props) {
    const [flip, setFlip] = useState(false);

    const {cardsObject} = props;
    const {cards, cardFocus} = cardsObject;

    return (
    <div className="main-flashcard-container">
        <div 
            className={`main-flashcard  ${flip?"flip-card":""}`}
            onClick = {() => setFlip(prev => !prev)}
        >
            <div className="front-flashcard">
                <h1> {cardFocus.word} </h1>
            </div>
            <div className="back-flashcard">
                <h2>{cardFocus.meaning}</h2>
            </div>
        </div>
    </div>
  );
}

export default MainFlashcard;