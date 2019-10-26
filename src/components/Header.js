import React from "react";

function Header(props) {
  return (
    <div className="header row">
      <h1 className="col-10">
        PonyClick, Don't ask me why, I just needed some images
      </h1>
      <ul className="list-group col-2">
        <li className="list-group-item">
          Current Score is: {props.score.currentScore}
        </li>
        <li className="list-group-item">
          Top score is: {props.score.topScore}
        </li>
      </ul>
    </div>
  );
}

export default Header;
