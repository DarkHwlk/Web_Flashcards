import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import * as actions from '../../../actions/index';

/* components */
import AnswerMultipleChoice from "./AnswerMultipleChoice";
import StatusMultipleChoice from "./StatusMultipleChoice";
import QuestionMultipleChoice from "./QuestionMultipleChoice";
import ResultMultipleChoice from "./ResultMultipleChoice";

function MultipleChoiceContainer(props) {
    const {cardsObject, choiceObject, onBackMainFlashcard, onNextMainFlashcard, 
        onChangeCurrentAnswer, onChangeMultipleChoice, onChangeResult, 
        onChangeCardFocus, onResetMultipleChoice, onResetCardFocus} = props;

    const {cards, cardFocus} = cardsObject;
    const {resultMultipleChoices} = choiceObject;

    const getStatus = (result, cardFocusId) => {
        if((result.length>cardFocusId))
            return result[cardFocusId];
        else 
            return -1;
    }
    const changeCardFocus = () => {
        onChangeCardFocus(cardFocus.id);
    }
    const getScore = (result, cards) => {
        let score = 0;
        if(result.some((element)=>{return (element===-1)})){
            return score;
        }
        if(result.length==cards.length){
            /* Done */
            score = result.reduce((sum,element)=>{
                return sum+element;
            },0);
        }
        return score;
    }
    const onReset = () => {
        onResetCardFocus();
        onResetMultipleChoice();
    }

    const score = getScore(resultMultipleChoices, cards);

    return (
    <div className="content-block">
        {/* main flashcard */}
        <div className="multiple-choice-container">
            <div className={`multiple-choice ${score?"hide":""}`} >
                <div className="block-question">
                    <h4> Meaning 
                        <span>{cardFocus.id+1}/{cards.length}</span>
                    </h4>
                    <QuestionMultipleChoice cardFocus={cardFocus}/>
                </div>
                <div className="block-answer">
                    <StatusMultipleChoice
                        status={getStatus(resultMultipleChoices,cardFocus.id)}
                        changeCardFocus={()=>changeCardFocus()}
                        onBackMainFlashcard={()=>onBackMainFlashcard()}
                        onNextMainFlashcard={()=>onNextMainFlashcard()}
                        onChangeCurrentAnswer={(id)=>onChangeCurrentAnswer(id)}
                    />
                    <AnswerMultipleChoice 
                        cardsObject={cardsObject}
                        choiceObject={choiceObject} 
                        onChangeCurrentAnswer={(id)=>onChangeCurrentAnswer(id)} 
                        onChangeMultipleChoice={(id, cardFocusId)=>onChangeMultipleChoice(id, cardFocusId)} 
                        onChangeResult={(status, cardFocusId)=>onChangeResult(status, cardFocusId)} 
                    />
                </div>
            </div>

            {score?<ResultMultipleChoice 
            score={score} numberCards={cards.length}
            onReset={onReset}
            />:null}
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
        onResetCardFocus: () => {
            dispatch(actions.actResetCardFocus());
        },
        onBackMainFlashcard: () => {
            dispatch(actions.actBackMainFlashcard());
        },
        onNextMainFlashcard: () => {
            dispatch(actions.actNextMainFlashcard());
        },
        onChangeCurrentAnswer: (id) => {
            dispatch(actions.actChangeCurrentMultipleChoice(id));
        },
        onChangeMultipleChoice: (id, cardFocusId) => {
            dispatch(actions.actChangeMultipleChoice(id, cardFocusId));
        },
        onChangeCardFocus: (cardFocusId) => {
            dispatch(actions.actChangeCardFocus(cardFocusId));
        },
        onChangeResult: (status, cardFocusId) => {
            dispatch(actions.actChangeResultMultipleChoice(status, cardFocusId));
        },
        onResetMultipleChoice: () => {
            dispatch(actions.actResetMultipleChoice());
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoiceContainer);