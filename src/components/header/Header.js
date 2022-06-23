import React from "react";
/* CSS */
import "../../css/header.css"

function Header() {
  return (
    <div className="container-header">
      <div id="header">
        <div className="navigation_tabs_left">
          <h1>Flashcards</h1>
          <a href="#" className="navigation_tab">
            <span>Home</span>
          </a>
          <a href="#" className="navigation_tab">
            <span>Topic</span>
          </a>
          <a href="#" className="navigation_tab">
            <span>Hot</span>
          </a>
          <a href="#" className="navigation_tab">
            <span>New</span>
          </a>
        </div>
        <div className="navigation_tabs_right">
          <button className="btn-menu-login">Login</button>
          <button className="btn-menu-register">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
