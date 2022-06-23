import React from "react";

import "../../css/title.css"
/* components */

function Title() {
  return (
    <div className="container">
      <div id="title-page">
        <h1>ENGLISH FLASHCARDS</h1>
        <div className="number-vote">
            <i className="fa-solid fa-star star-vote"/>
            <i className="fa-solid fa-star star-vote"/>
            <i className="fa-solid fa-star star-vote"/>
            <i className="fa-solid fa-star star-vote"/>
            <i className="fa-solid fa-star-half star-vote"/>
        </div>
      </div>
    </div>
  );
}

export default Title;