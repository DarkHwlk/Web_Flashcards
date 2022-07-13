import React, {useState} from "react";

/* components */

function CreateCard(props) {
  const {onCreateEditBox} = props;

    return (
    <div className="minicard create_card">
      <i 
        className="fa fa-plus-circle create_card"
        onClick={()=>onCreateEditBox()}
      />
    </div>
  );
}
  
  export default CreateCard;