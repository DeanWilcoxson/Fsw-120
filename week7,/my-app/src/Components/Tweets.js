import React from "react";
class Tweets extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let tweetsArray = [];

    let tweets = this.props.data[0].myTweets.map(function (x) {
      return (
        <div key={x.id} id="returnDiv">
          <img src={x.url} alt="IMG N/A" id="returnImg"></img>
          <h3 id="returnH3">{x.title}</h3>
          <h5 id="returnH5">{x.description}</h5>
          <h6 id="returnH6">{`Author:${x.author} Date:${x.date}`}</h6>
        </div>
      );
    });
    tweetsArray.push(...tweets);

    let moretweets = this.props.data[1].friendsTweets.map(function (x) {
      return (
        <div key={x.id} id="returnDiv">
          <img src={x.url} alt="IMG N/A" id="returnImg"></img>
          <h3 id="returnH3">{x.title}</h3>
          <h5 id="returnH5">{x.description}</h5>
          <h6 id="returnH6">{`Author:${x.author} Date:${x.date}`}</h6>
        </div>
      );
    });
    tweetsArray.push(...moretweets);

    let sortedTweetsArray = tweetsArray.sort((a, b) => {
      let stringA = a.props.children[3].props.children
        .split("| ")[1]
        .split(":")[1]
        .split("/");
      let stringB = b.props.children[3].props.children
        .split("| ")[1]
        .split(":")[1]
        .split("/");

      let dateA = stringA[2] + stringA[0] + stringA[1];
      let dateB = stringB[2] + stringB[0] + stringB[1];

      return dateA - dateB;
    });
    return <div id="myPageTweets">{sortedTweetsArray}</div>;
  }
}
export default Tweets;
