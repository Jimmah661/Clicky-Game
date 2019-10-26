import React from "react";
import ImageCard from "./ImageCard";
import ponies from "./ponies.json";

class Body extends React.Component {
  state = {
    ponies: ponies
  };

  // Function passed to each ImageCard, this will handle the logic of what happens when you click on one of the cards
  // Handles differently if the cards clicked state is either True or False
  clickEvent = (pony, clicked) => {
    // Pass current state of ponies into a temporary variable
    var newPonies = this.state.ponies;
    // Run through the array of Ponies
    for (var i in newPonies) {
      // When it hits the current pony name and it hasn't been clicked before run this
      if (newPonies[i].name === pony && newPonies[i].clicked === false) {
        // Set the clicked value to true
        newPonies[i].clicked = true;
        // Update the score by 1
        this.props.updateScore();
      }
      // if it hits the current pony name but it HAS been clicked before then run this
      else if (newPonies[i].name === pony && newPonies[i].clicked === true) {
        // run through the array and reset every clicked state to false
        // See if you can find a better way to do this.
        newPonies.forEach(element => {
          element.clicked = false;
          return element;
        });
        // Reset the current score to 0, leaves the topScore alone
        this.props.resetScore();
      }
    }
    // Update the current state with the new state of the ponies
    this.setState({ ponies: newPonies });
  };

  render() {
    return (
      <div>
        <p>
          Click the Ponies to earn points, Don't click the same pony more than
          once
        </p>
        <div className="clickerContainer row clearfix">
          <ImageCard ponies={this.state.ponies} clickEvent={this.clickEvent} />
        </div>
      </div>
    );
  }
}

export default Body;
