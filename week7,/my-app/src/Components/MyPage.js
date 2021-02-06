import React from "react";
import data from "../Data.json";

class MyPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let tweets = data.data[0].myTweets.map(function (props) {
      return (
        <div key={props.id} id="returnDiv">
          <img src={props.url} alt="IMG N/A" id="returnImg"></img>
          <h3 id="returnH3">{props.title}</h3>
          <h5 id="returnH5">{props.description}</h5>
          <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
        </div>
      );
    });
    return (
      <div>
        <div id="formGrid">
          <form id="postForm">
            <input type="text" placeholder="Status" id="title"></input>
            <textarea
              placeholder="How are you Feeling Today?"
              id="description"
            />
            <button id="postBtn">Post</button>
          </form>
        </div>
        <div id="myPageTweets">{tweets}</div>
      </div>
    );
  }
}
export default MyPage;
