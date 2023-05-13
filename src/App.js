import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./component/CircleSelector/CircleSelector";
import Circles from "./component/Circles/Circles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "circleOne",
    };
  }
  handleSelect = (circle) => {
    this.setState({
      selected: circle,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
          <Circles selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
