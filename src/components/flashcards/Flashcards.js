import React from "react";

/* components */
import Flashcard from "./Flashcard";

function Flashcards() {
  return (
    <div className="container">
        <div id="flashcards">
            <Flashcard/>
            <Flashcard/>
        </div>
    </div>
  );
}

export default Flashcards;
