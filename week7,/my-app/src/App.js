import React from "react";
import "./Styles.css";
import Header from './Components/Header'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Tweets from "./Components/Tweets";
import MyPage from "./Components/MyPage";
import Home from "./Components/Home";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div id="mainDiv">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/Tweets">
            <Tweets />
          </Route>
          <Route exact path="/MyPage">
            <MyPage />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
