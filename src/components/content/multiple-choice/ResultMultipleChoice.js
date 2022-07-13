import React, {useState} from "react";
import * as ADVICE from '../../../constants/advice_message';

/* components */

function ResultMultipleChoice(props) {
  const {score, numberCards, onReset} = props;

  const showAdvice = (score, sum) => {
    let result = score/sum*10;
    if(result<=4) return <p className="very_bad">{ADVICE.VERY_BAD}</p>;
    else if(result<6) return <p className="bad">{ADVICE.BAD}</p>;
    else if(result<8) return <p className="not_bad">{ADVICE.NOT_BAD}</p>;
    else if(result<9) return <p className="good">{ADVICE.GOOD}</p>;
    else if(result<=10) return <p className="very_good">{ADVICE.VERY_GOOD}</p>;
  }

  const showClassAdvice = (score, sum) => {
    let result = score/sum*10;
    if(result<=4) return ADVICE.VERY_BAD;
    else if(result<6) return ADVICE.BAD;
    else if(result<8) return ADVICE.NOT_BAD;
    else if(result<9) return ADVICE.GOOD;
    else if(result<=10) return ADVICE.VERY_GOOD;
  }

    return (
    <div className="multiple-choice result" >
        <h1>YOUR RESULT</h1>
        <h3>{score}/{numberCards}</h3>
        {showAdvice(score, numberCards)}
        <button
          onClick={()=>onReset()}
        >
          Do again!
        </button>
    </div>
  );
}
  
  export default ResultMultipleChoice;