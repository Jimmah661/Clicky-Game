import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
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
