import React from "react";
class Home extends React.Component {
  constructor(){
    super()
    this.state = {}
  }
  // let isLoggedIn = () => async {

  // }
  render() {
    return (
      <div id="formGrid">

        <form id="loginForm">
          <input type="email" id="email" placeholder="Email" required></input>
          <input
            type="text"
            id="password"
            placeholder="Password"
            required
          ></input>
          <button id="logIn" /* onClick={this.isLoggedIn()} */>Log In</button>
        </form>
      </div>
    );
  }
}
export default Home;
