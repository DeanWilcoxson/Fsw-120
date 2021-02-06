import "./Styles.css";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tweets from "./Components/Tweets";
import MyPage from "./Components/MyPage";
import { SocialIcon } from "react-social-icons";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: "",
    };
  }

  // isLoggedIn = () => {
  //   this.state.loggedIn = true ? "hello":""
  // };

  render() {
    let style = {
      height: 35,
      width: 35,
      boxShadow: "grey 2px 2px 2px",
      borderRadius: "50%",
      border: "1px outset rgba(55, 168, 243, 0.835)",
    };
    return (
      <div id="mainDiv">
        <header>
          Twitter
          <SocialIcon network="twitter" style={style} fgColor="white" />
          <hr />
        </header>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Tweets">
            <Tweets />
          </Route>
          <Route exact path="/MyPage">
            <MyPage />
          </Route>
        </Switch>
        <footer>
          <div>
            <hr />
            <p>&copy; 2021 WebDev Student Dean Wilcoxson</p>
            <p>Email: dean.wilcoxson@bryanuniversity.edu</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
