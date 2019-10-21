import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>ClickBits, the clicky clicky memory game</h1>
      <p>Don't click a picture more than once</p>
      <p>Current Score is: {props.currentScore}</p>
    </div>
  );
}

export default Header;
