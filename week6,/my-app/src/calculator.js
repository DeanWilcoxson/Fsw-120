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
  handleClick = (e) => {
    this.setState({
      calculation: e.target.id,
    });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: Number(value),
    });
  };
  calculate = () => {
    if (this.state.calculation === "add") {
      return(`${this.state.num1} + ${this.state.num2} = ${this.state.num1 + this.state.num2}`);
    } else if (this.state.calculation === "sub") {
      return(`${this.state.num1} - ${this.state.num2} = ${this.state.num1 - this.state.num2}`);
    } else if (this.state.calculation === "mul") {
      return(`${this.state.num1} * ${this.state.num2} = ${this.state.num1 * this.state.num2}`);
    } else if (this.state.calculation === "div") {
      return(`${this.state.num1} / ${this.state.num2} = ${this.state.num1 / this.state.num2}`);
    } else return "";
  };
  render() {
    return (
      <div id="calc">
        <input
          className="number"
          id="num1"
          name="num1"
          value={this.state.num1}
          type="number"
          onChange={this.handleChange}
          placeholder="Number1"
          required
        />
        <input
          className="number"
          id="num2"
          name="num2"
          type="number"
          value={this.state.num2}
          onChange={this.handleChange}
          placeholder="Number2"
          required
        />
        <div id="buttonGrid">
          <button className="button" id="add" onClick={this.handleClick}>
            +
          </button>
          <button className="button" id="sub" onClick={this.handleClick}>
            -
          </button>
          <button className="button" id="mul" onClick={this.handleClick}>
            x
          </button>
          <button className="button" id="div" onClick={this.handleClick}>
            /
          </button>
        </div>
        <p id="calculation">
          {this.state.calculation === "add" ||
          this.state.calculation === "sub" ||
          this.state.calculation === "mul" ||
          this.state.calculation === "div"
            ? this.calculate()
            : console.log("error")}
        </p>
      </div>
    );
  }
}

export default Calculator;
