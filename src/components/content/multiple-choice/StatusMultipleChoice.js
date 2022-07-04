import React, {useState} from "react";

/* components */

function StatusMultipleChoice(props) {
  const {status} = props;

  const {onBackMainFlashcard, onNextMainFlashcard, onChangeCurrentAnswer, changeCardFocus} = props;

  const onBack = () => {
    onBackMainFlashcard();
    onChangeCurrentAnswer(-1);
    changeCardFocus();
  }
  const onNext = () => {
    onNextMainFlashcard();
    onChangeCurrentAnswer(-1);
    changeCardFocus();
  }

    return (
    <div className="status">
        <button onClick={()=>onBack()}>
          <i className="fas fa-angle-left"/> Back
        </button>
        {status===-1 
        ? <h4>Choose the correct word</h4>
        : <h4 className={status?'correct':'incorrect'}>
        {status?"Correct, let's continue like this":'Incorrect, try up!!!'}</h4>}
        <button onClick={()=>onNext()}>
          Next <i className="fas fa-angle-right"/>
        </button>
    </div>
  );
}

export default StatusMultipleChoice;