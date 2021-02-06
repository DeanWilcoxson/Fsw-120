import React from "react";
import data from "../Data.json";
class Tweets extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let tweetsArray = [];

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
    tweetsArray.push(tweets);

    let moretweets = data.data[1].friendsTweets.map(function (props) {
      return (
        <div key={props.id} id="returnDiv">
          <img src={props.url} alt="IMG N/A" id="returnImg"></img>
          <h3 id="returnH3">{props.title}</h3>
          <h5 id="returnH5">{props.description}</h5>
          <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
        </div>
      );
    });
    tweetsArray.push(moretweets);

    let sortedTweetsArray = tweetsArray.sort((a, b) => b.date - a.date);
    return <div>{sortedTweetsArray}</div>;
  }
}
export default Tweets;
