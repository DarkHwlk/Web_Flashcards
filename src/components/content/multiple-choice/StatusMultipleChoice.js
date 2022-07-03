import React, {useState} from "react";

/* components */

function StatusMultipleChoice(props) {
  const {onBackMainFlashcard, onNextMainFlashcard, onChangeCurrentAnswer} = props;
  const [status, setStatus] = useState(-1); //-1: normal, 0: false, 1 true

  const onBack = () => {
    onBackMainFlashcard();
    onChangeCurrentAnswer(-1);
  }
  const onNext = () => {
    onNextMainFlashcard();
    onChangeCurrentAnswer(-1);
  }

    return (
    <div className="status">
        <button onClick={()=>onBack()}>
          <i className="fas fa-angle-left"/> Back
        </button>
        {status===-1 
        ? <h4>Choose the correct word</h4>
        : <h4 className={status?'correct':'incorrect'}>
        {status?'Correct':'Incorrect'}</h4>}
        <button onClick={()=>onNext()}>
          Next <i className="fas fa-angle-right"/>
        </button>
    </div>
  );
}

export default StatusMultipleChoice;