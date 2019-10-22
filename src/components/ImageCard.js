import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
  console.log(props);
  var result = [];
  for (let i = 0; i < props.ponies.length; i++) {
    let cardStyle = {
      backgroundImage: "url('" + props.ponies[i].img + "')"
    };
    result.push(
      <div
        className="clicker"
        style={cardStyle}
        key={props.ponies[i].name}
        onClick={() =>
          props.clickEvent(props.ponies[i].name, props.ponies[i].clicked)
        }
      ></div>
    );
  }

  return result;
}

export default ImageCard;
