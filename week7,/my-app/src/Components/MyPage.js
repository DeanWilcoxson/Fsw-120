import React from "react";
// import data from "../Data.json";
class MyPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  };
  getId = () => {
    var arr = this.props.data[0]
    console.log(arr)
    let myTweetsArr = arr.myTweets.length
    let myFriendsArr = arr.friendsTweets.length
    return(`${myTweetsArr + myFriendsArr + 1}`)
  }
  onClick = (e) => {
    console.log(this.props.data[0])
    var tweet = {
      author: this.props.author,
      url: this.props.url,
      id: this.getId(),
      title: this.state.title,
      description: this.state.description,
      date: new Date()
    }
    this.props.addOne(tweet)
  };
  render() {
    let tweets = this.props.data[0].myTweets;
    console.log(tweets);
    let myTweets = tweets.map(function (props) {
      return (
        <div key={props.id} id="returnDiv">
          <img src={props.url} alt="IMG N/A" id="returnImg"></img>
          <h3 id="returnH3">{props.title}</h3>
          <h5 id="returnH5">{props.description}</h5>
          <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
          <button id="editButton" /* onClick={} */>
            Edit
          </button>
          <button id="deleteButton" /* onClick={} */>
            Delete
          </button>
        </div>
      );
    });
    return (
      <div>
        <div id="formGrid">
          <form id="postForm">
            <input
              type="text"
              placeholder="Status"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            ></input>
            <textarea
              placeholder="How are you feeling today?"
              id="description"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
            <button id="postBtn">Post</button>
          </form>
        </div>
        <div id="myPageTweets">{myTweets}</div>
      </div>
    );
  }
}
export default MyPage;
