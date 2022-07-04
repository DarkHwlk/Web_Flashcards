import React, {useState} from "react";

/* components */

function ResultMultipleChoice(props) {
  const {score, numberCards, onReset} = props;

    return (
    <div className="multiple-choice result" >
        <h1>YOUR RESULT</h1>
        <h3>{score}/{numberCards}</h3>
        <p>Not bad, try again to get high score</p>
        <button
          onClick={()=>onReset()}
        >
          Do again!
        </button>
    </div>
  );
}
  
  export default ResultMultipleChoice;