import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    var ponyList = this.shuffle(this.props.ponies);
    console.log(ponyList);
    var result = [];
    for (let i = 0; i < ponyList.length; i++) {
      let cardStyle = {
        backgroundImage: "url('" + ponyList[i].img + "')"
      };
      result.push(
        <div
          className="clicker"
          style={cardStyle}
          key={ponyList[i].name}
          onClick={() =>
            this.props.clickEvent(ponyList[i].name, ponyList[i].clicked)
          }
        ></div>
      );
    }

    return result;
  }
}

export default ImageCard;
