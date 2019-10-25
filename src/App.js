import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0
  };

  // Function will manage the updating of scores in the Current State
  updateScore = () => {
    // if the currentScore is equal to the topScore then update the topScore too
    if (this.state.currentScore === this.state.topScore) {
      this.setState(prevState => {
        return {
          currentScore: prevState.currentScore + 1,
          topScore: prevState.topScore + 1
        };
      });
      // Else only update the currenScore
    } else {
      this.setState(prevState => {
        return { currentScore: prevState.currentScore + 1 };
      });
    }
    // Set the current state currentScore to the previous state currentScore +1
  };

  // Will handle he reset on the event of a user making a mistake
  resetScore = () => {
    // Sets the current state Score to 0
    this.setState({ currentScore: 0 });
  };

  render() {
    return (
      <div>
        <Header score={this.state} />
        <Body
          currentScore={this.state.currentScore}
          updateScore={this.updateScore}
          resetScore={this.resetScore}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
