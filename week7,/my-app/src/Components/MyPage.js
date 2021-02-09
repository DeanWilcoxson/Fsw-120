import React from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class MyPage extends React.Component {
  constructor(props) {
    super(props);
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
    e.preventDefault();
    var tweet = {
      author: this.props.data[0].myTweets[0].author,
      url: this.props.data[0].myTweets[0].url,
      id: this.getId(this.props.data),
      title: this.state.title,
      description: this.state.description,
      date: this.getDate(),
    };
    this.props.addOne(tweet);
  };
  getDate = () => {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return `${month}/${day}/${year}`;
  };
  getId = (data) => {
    var arr = data;
    let myTweetsArr = arr[0].myTweets.length;
    let myFriendsArr = arr[1].friendsTweets.length;
    return `${myTweetsArr + myFriendsArr + 1}`;
  };
  // edited = () => {
  //   this.setState({});
  // };
  // editing = () => {
  //   this.setState({});
  // };
  render = () => {
    const editIcon = <FontAwesomeIcon icon={faEdit} color="white" />;
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} color="white" />;
    const post = <FontAwesomeIcon icon={faSave} color="white" />;
    let tweets = this.props.data[0].myTweets;
    let myTweets = tweets.map((props) => {
      return (
        <div key={props.id} id="returnDiv">
          <img src={props.url} alt="IMG N/A" id="returnImg"></img>
          <p id="returnH3">{props.title}</p>
          <h5 id="returnH5">{props.description}</h5>
          <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
          <button 
            id="editButton" 
            // onClick={this.props.editOne(props.id)}
            >{editIcon}
          </button>
          <button
            id="deleteButton"
            onClick={(e) => {
              console.log(this);
              this.props.deleteOne(props.id);
            }}
          >
            {deleteIcon}
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
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              placeholder="Status"
            ></input>
            <textarea
              id="description"
              name="description"
              onChange={this.onChange}
              value={this.state.description}
              placeholder="How are you feeling today?"
            />
            <button onClick={this.onClick} id="postBtn">
              {post}
            </button>
          </form>
        </div>
        <div id="myPageTweets">{myTweets}</div>
      </div>
    );
  };
}
export default MyPage;
