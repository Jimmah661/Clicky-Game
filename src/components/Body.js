import React from "react";

class Body extends React.Component {
  render() {
    return (
      <div>
        <p>This is the Body</p>
        <p>Current Score is: {this.props.currentScore}</p>
        <button onClick={() => this.props.updateScore()}>increase Score</button>
      </div>
    );
  }
}

export default Body;
