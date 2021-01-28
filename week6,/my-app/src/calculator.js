import React from "react";
import "./Styles.css";
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      calculation: "",
    };
  }
  handleClick = () => {};
  handleChange = () => {};
  render() {
    return (
      <div>
        <hr />
        <form id="calc">
          <input
            className="number"
            id="num1"
            name="num1"
            type="number"
            onChange={this.handleChange()}
            placeholder="Number1"
          />
          <input
            className="number"
            id="num2"
            name="num2"
            type="number"
            onChange={this.handleChange()}
            placeholder="Number2"
          />
          <div id="buttonGrid">
            <button className="button" onClick={this.handleClick}>
              +
            </button>
            <button className="button" onClick={this.handleClick}>
              -
            </button>
            <button className="button" onClick={this.handleClick}>
              x
            </button>
            <button className="button" onClick={this.handleClick}>
              /
            </button>
          </div>
        </form>
        <p id="estimate"></p>
        <hr />
      </div>
    );
  }
}
export default Calculator;
