import React from "react";

function Header() {
  return (
    <div className="container-header">
      <div id="header">
        <h1>Flashcards</h1>
        <div>
          <button id="show_card_box">Add Card</button>
          <button id="delete_cards">Del Cards</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
