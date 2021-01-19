import React from "react";
import Form from "./Form";
import "./Index.css"
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
export default App;