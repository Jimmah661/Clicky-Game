import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>ClickBits, the clicky clicky memory game</h1>
      <ul>
        <li>Current Score is: {props.score.currentScore}</li>
        <li>Top score is: {props.score.topScore}</li>
      </ul>
    </div>
  );
}

export default Header;
