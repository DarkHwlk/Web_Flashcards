import React, {useState} from "react";

/* components */

function ResultMultipleChoice(props) {

    return (
    <div className="multiple-choice result" >
        <h1>YOUR RESULT</h1>
        <h3>3/5</h3>
        <p>Not bad, try again to get high score</p>
        <button>Do again!</button>
    </div>
  );
}
  
  export default ResultMultipleChoice;