import React from "react";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <form id="loginForm">
          <input type="email" placeholder="Email" required></input>
          <input type="text" placeholder="Password" required></input>
          <button >Log In</button>
        </form>
      </div>
    );
  }
}
export default Home;
