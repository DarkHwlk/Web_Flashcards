import React from "react";

/* components */

function CreateCard() {
  return (
    <div class="container">
      <div id="create_card">
        <h2>Create Flashcard</h2>
        <label for="question">Question</label>
        <textarea id="question" maxlength="280"></textarea>
        <label for="answer" maxlength="280">Answer</label>
        <br/>
        <textarea id="answer"></textarea>
        <div>
          <button id="save_card">Save</button> <button id="close_card_box">Close</button>
        </div>
      </div>
    </div>
  );
}

export default CreateCard;
