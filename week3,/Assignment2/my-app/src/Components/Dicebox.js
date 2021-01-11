import React from "react";
import Die from "./Die";
class DiceBox extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.counter < 3) {
      return this.setState((prevState) => ({
        num1: Math.floor(Math.random() * 6 + 1),
        num2: Math.floor(Math.random() * 6 + 1),
        num3: Math.floor(Math.random() * 6 + 1),
        num4: Math.floor(Math.random() * 6 + 1),
        num5: Math.floor(Math.random() * 6 + 1),
        counter: prevState.counter + 1,
      }));
    } else if (this.state.counter >= 3) {
      this.setState({
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        counter: 0
      });
    }
  }
  render() {
    let styles = {
        textAlign:"center",
        fontSize:"50px"
    }

    return (
      <div style={styles}>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
        <Die/>
      </div>
    );
  }
}
export default DiceBox;
