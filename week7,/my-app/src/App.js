import React from "react";
import "./Styles.css";
import Navbar from "./Components/Navbar";
import Tweets from "./Components/Tweets";
import MyPage from "./Components/MyPage";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="mainDiv">
        <header>
          Twitter
          <SocialIcon
            network="twitter"
            style={{
              height: 35,
              width: 35,
              boxShadow: "grey 2px 2px 2px",
              borderRadius: "50%",
              border: "1px outset rgba(55, 168, 243, 0.835)"
            }}
            fgColor="white"
          />
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
          <p>&copy; 2021 WebDev Student Dean Wilcoxson</p>
          <p>Email: dean.wilcoxson@bryanuniversity.edu</p>
        </footer>
      </div>
    );
  }
}

export default App;
