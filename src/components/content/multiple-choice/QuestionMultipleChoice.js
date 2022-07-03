import React, {useState} from "react";

/* components */

function QuestionMultipleChoice(props) {
    const {cardFocus} = props;

    return (
    <div className="question">
        <h3>
            {cardFocus.meaning}
        </h3>
    </div>
  );
}

export default QuestionMultipleChoice;