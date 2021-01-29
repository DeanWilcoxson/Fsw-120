import React from "react";
import Calculator from "./calculator";
import "./Styles.css";

class App extends React.Component {
  render() {
    let style = {
      color: "red",
      fontWeight: "bold",
    };
    return (
      <div>
        <header style={style}>React Calculator</header>
        <hr/>
        <Calculator />
        <hr/>
        <footer style={style}>&copy; 2021 WebDev Student Dean Wilcoxson</footer>
      </div>
    );
  }
}
export default App;
