import React from "react";
import "./ImageCard.css";

class ImageCard extends React.Component {
  // Defining my function to shuffle the pony list, this ensures a different order each time the component loads
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    // Assign a copy of the pony list in a random order
    var ponyList = this.shuffle(this.props.ponies);
    // Define a result container to hold the generated div's
    var result = [];
    // Iterate through the randomised pony list
    for (let i = 0; i < ponyList.length; i++) {
      let cardStyle = {
        backgroundImage: "url('" + ponyList[i].img + "')"
      };
      result.push(
        // Push the new Div into the result array
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
