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

  render() {
    return (
      <div>
        <Header currentScore={this.state.currentScore} />
        <Body
          currentScore={this.state.currentScore}
          updateScore={this.updateScore}
        />
        <Footer />
      </div>
    );
  }

  updateScore = event => {
    // event.preventDefault();
    this.setState(prevState => {
      return { currentScore: prevState.currentScore + 1 };
    });
  };
}

export default App;
