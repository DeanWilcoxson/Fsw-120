import React from "react";
import Color from "./Components/Color";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ["white", "white", "white", "white"],
    };
  }
  smallTimeDj = () => {
    if (this.state.color[0] === "white") {
      this.setState({
        color: ["black", "black", "black", "black"],
      });
    } else if (this.state.color[0] === "black") {
      this.setState({
        color: ["white", "white", "white", "white"],
      });
    }
  };
  render() {
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <Color backgroundColor={this.state.color[0]} />
          <Color backgroundColor={this.state.color[2]} />
          <Color backgroundColor={this.state.color[1]} />
          <Color backgroundColor={this.state.color[3]} />
        </div>
        <div>
          <button onClick={this.smallTimeDj}>Small Time Dj</button>
          <button>Party Dj</button>
          <button>Professional Dj</button>
          <button>Professional Dj</button>
        </div>
      </div>
    );
  }
}
export default App;
