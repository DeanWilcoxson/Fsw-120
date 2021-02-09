import "./Styles.css";
import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tweets from "./Components/Tweets";
import MyPage from "./Components/MyPage";
import { SocialIcon } from "react-social-icons";
import { Switch, Route } from "react-router-dom";
import data from "./Data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      // loggedIn: false,
    };
  }
  //  logIn = () => {
  //   let log = document.getElementById("email")
  //   if( log.value === ""){
  //     this.setState({
  //       loggedIn: true
  //   })
  // }}
  addOne = (tweet) => {
    let newData = this.state.data;
    newData = {
      data: [
        { myTweets: [...this.state.data.data[0].myTweets, tweet] },
        this.state.data.data[1],
      ],
    };
    this.setState((prevState) => ({
      data: newData,
    }));
  };
  // editOne = (id) => {
  //   //Same Logic as "Delete" but with "map"
  //   console.log(id);
  //   let newData = this.state.data;
  //   let updateTweets = this.state.data.data[0].myTweets;
  //   let updated = updateTweets.map(function (tweet) {
  //     return tweet.id === id;
  //   });
  //   console.log(updated);
  //   newData = {
  //     data: [{ myTweets: updated }, this.state.data.data[1]],
  //   };
  //   console.log(newData);
  //   this.setState((prevState) => ({
  //     data: newData,
  //   }));
  // };
  deleteOne = (id) => {
    console.log(id);
    let newData = this.state.data;
    let updateTweets = this.state.data.data[0].myTweets;
    let updated = updateTweets.filter(function (tweet) {
      return tweet.id !== id;
    });
    console.log(updated);
    newData = {
      data: [{ myTweets: updated }, this.state.data.data[1]],
    };
    console.log(newData);
    this.setState((prevState) => ({
      data: newData,
    }));
  };
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
            <Tweets data={this.state.data.data} />
          </Route>
          <Route exact path="/MyPage">
            <MyPage
              data={this.state.data.data}
              addOne={this.addOne}
              deleteOne={this.deleteOne}
              editOne={this.editOne}
            />
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
