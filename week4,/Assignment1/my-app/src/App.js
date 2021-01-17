import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      listItems: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      listItems: [...prevState.listItems, prevState.name]
    }));
  }
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            placeholder="Enter Name"/>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <h1>{this.state.name}</h1>
        <ol>
          {this.state.listItems.map(function (item) {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}
export default App;