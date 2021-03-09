import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.backgroundColor = props.backgroundColor;
  }

  render() {
    let style = {
      border: "2px solid black",
      height: "175px",
      width: "325px",
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div>
        <p style={style}></p>
      </div>
    );
  }
}
export default Color;
