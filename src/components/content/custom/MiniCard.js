import React, {useState} from "react";

/* components */

function MiniCard(props) {
    const {card, onEditCard} = props;

    const {id, word, meaning} = card;

    return (
    <div className="minicard">
        <h2 className="minicard-word">
            {word}
        </h2>
        <h2  className="minicard-meaning">
            {meaning}
        </h2>
        <i className="fa fa-pencil edit-card"
            onClick={()=>onEditCard(id,{
                word,
                meaning,
            })}
        />
        <i className="fa fa-reorder reorder-card"/>
        <i className="fa fa-close delete-card"/>
    </div>
  );
}
  
  export default MiniCard;