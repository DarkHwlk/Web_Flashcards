import React, {useState} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import AnswerMultipleChoice from "./AnswerMultipleChoice";
import StatusMultipleChoice from "./StatusMultipleChoice";
import QuestionMultipleChoice from "./QuestionMultipleChoice";

function MultipleChoiceContainer(props) {
    const {cardsObject, choiceObject, onBackMainFlashcard, onNextMainFlashcard, 
        onChangeCurrentAnswer, onAddMultipleChoice} = props;

    const {cards, cardFocus} = cardsObject;

    const [status, setStatus] = useState(-1); //-1: normal, 0: false, 1 true
    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="multiple-choice-container">
            <div className="multiple-choice" >
                <div className="block-question">
                    <h4>
                        Meaning 
                        <span>{cardFocus.id}/{cards.length}</span>
                    </h4>
                    <QuestionMultipleChoice cardFocus={cardFocus}/>
                </div>
                <div className="block-answer">
                    <StatusMultipleChoice
                        onBackMainFlashcard={()=>onBackMainFlashcard()}
                        onNextMainFlashcard={()=>onNextMainFlashcard()}
                        onChangeCurrentAnswer={(id)=>onChangeCurrentAnswer(id)}
                    />
                    <AnswerMultipleChoice 
                        cardsObject={cardsObject}
                        choiceObject={choiceObject} 
                        onChangeCurrentAnswer={(id)=>onChangeCurrentAnswer(id)} 
                        onAddMultipleChoice={(id, cardFocusId)=>onAddMultipleChoice(id, cardFocusId)}  
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        cardsObject: state.cards,
        choiceObject: state.multiple_choice,
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
        onChangeCurrentAnswer: (id) => {
            dispatch(actions.actChangeCurrentMultipleChoice(id));
        },
        onAddMultipleChoice: (id, cardFocusId) => {
            dispatch(actions.actAddMultipleChoice(id, cardFocusId));
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoiceContainer);