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

  updateScore = event => {
    // if the currentScore is equal to the topScore then run the updateTopScore method too
    if (this.state.currentScore === this.state.topScore) {
      this.setState(prevState => {
        return {
          currentScore: prevState.currentScore + 1,
          topScore: prevState.topScore + 1
        };
      });
    } else {
      this.setState(prevState => {
        return { currentScore: prevState.currentScore + 1 };
      });
    }
    // Set the current state currentScore to the previous state currentScore +1
  };

  resetScore = () => {
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
