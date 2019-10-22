import React from "react";
import ImageCard from "./ImageCard";
import ponies from "./ponies.json";
import "./Body.css";

class Body extends React.Component {
  state = {
    ponies: ponies
  };

  render() {
    return (
      <div>
        <p>Click the Ponies to earn points, Don't click the same </p>
        <div className="clickerContainer clearfix">
          <ImageCard ponies={this.state.ponies} clickEvent={this.clickEvent} />
        </div>
      </div>
    );
  }

  clickEvent = (pony, clicked) => {
    console.log(pony, clicked);
    // Pass current state of ponies into a temporary variable
    var newPonies = this.state.ponies;
    // Run through the array of Ponies
    for (var i in newPonies) {
      // When it hits the current pony name and it hasn't been clicked before run this
      if (newPonies[i].name === pony && newPonies[i].clicked === false) {
        console.log("Not Clicked");
        // Set the clicked value to true
        newPonies[i].clicked = true;
        // Update the score by 1
        this.props.updateScore();
      }
      // if it hits the current pony name but it HAS been clicked before then run this
      else if (newPonies[i].name === pony && newPonies[i].clicked === true) {
        console.log("Already Clicked");
      }
    }
    // Update the current state with the new state of the ponies
    this.setState({ ponies: newPonies });
  };
}

export default Body;
