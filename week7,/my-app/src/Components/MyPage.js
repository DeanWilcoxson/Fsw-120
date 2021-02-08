import React from "react"; 
import {faEdit} from "@fortawesome/free-solid-svg-icons"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
import {faSave} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      author: "",
      date: "",
      id: "",
      url: "",
    };
  }
  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  onClick = (e) => {
    console.log(this.props.data[0]);
    var tweet = {
      author: this.props.author,
      url: this.props.url,
      id: this.getId(),
      title: this.state.title,
      description: this.state.description,
      date: new Date(),
    };
    this.props.addOne(tweet);
  };
  getId = () => {
    var arr = this.props.data[0];
    console.log(arr);
    let myTweetsArr = arr.myTweets.length;
    let myFriendsArr = arr.friendsTweets.length;
    return `${myTweetsArr + myFriendsArr + 1}`;
  };
  addOne = (props) => {

    return (
      <div key={props.id} id="returnDiv">
        <img src={props.url} alt="IMG N/A" id="returnImg"></img>
        <h3 id="returnH3">{props.title}</h3>
        <h5 id="returnH5">{props.description}</h5>
        <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
        <button id="editButton" /* onClick={} */>Edit</button>
        <button id="deleteButton" /* onClick={} */>Delete</button>
      </div>
    );
  };
  // editOne = () => {document.body.createElement("h1")};
  // deleteOne = () => {};
  render() {
    const editIcon = <FontAwesomeIcon icon={faEdit} color="white"/>
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} color="white"/>
    const post = <FontAwesomeIcon icon={faSave} color="white"/>
    let tweets = this.props.data[0].myTweets;
    let myTweets = tweets.map(function (props) {
      return (
        <div key={props.id} id="returnDiv">
          <img src={props.url} alt="IMG N/A" id="returnImg"></img>
          <p id="returnH3">{props.title}</p>
          <h5 id="returnH5">{props.description}</h5>
          <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
          <button id="editButton" /* onClick={this.editOne} */>{editIcon}</button>
          <button id="deleteButton" /* onClick={this.deleteOne} */>{deleteIcon}</button>
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
            <button id="postBtn">{post}</button>
          </form>
        </div>
        <div id="myPageTweets">{myTweets}</div>
      </div>
    );
  }
}
export default MyPage;
