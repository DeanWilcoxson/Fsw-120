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
      titleUpdate:"",
      description: "",
      descriptionUpdate: "",
      author: "",
      date: "",
      id: "",
      url: "",
      updating: false
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
  edited = (e) => {
    console.log(this.state.titleUpdate, this.state.descriptionUpdate)
    e.preventDefault();
    var tweet = {
      author: this.props.data[0].myTweets[0].author,
      url: this.props.data[0].myTweets[0].url,
      id: this.state.id,
      title: this.state.titleUpdate ? this.state.titleUpdate: this.props.data[0].myTweets[0].title,
      description: this.state.descriptionUpdate ? this.state.descriptionUpdate: this.props.data[0].myTweets[0].description,
      date: this.props.data[0].myTweets[0].date,
    };
    this.props.editOne(tweet);
    this.setState({
      id: "",
      updating: false,
      titleUpdate:"",
      descriptionUpdate:"",
    });
  };
  editing = (id) => {
    this.setState({
      id: id, 
      updating: true
    });
  };
  render = () => {
    const editIcon = <FontAwesomeIcon icon={faEdit} color="white" />;
    const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} color="white" />;
    const post = <FontAwesomeIcon icon={faSave} color="white" />;
    let tweets = this.props.data[0].myTweets;
    let myTweets = tweets.map((props) => {
      return (
        <div key={props.id} id="returnDiv">
          {this.state.updating && this.state.id === props.id ? 
                (<form id="updateForm">
                <input
                  type="text"
                  id="title"
                  name="titleUpdate"
                  onChange={this.onChange}
                  value={this.state.titleUpdate}
                  placeholder="Status"
                ></input>
                <textarea
                  id="description"
                  name="descriptionUpdate"
                  onChange={this.onChange}
                  value={this.state.descriptionUpdate}
                  placeholder="How are you feeling today?"
                />
                <button onClick={this.edited} id="updateBtn">
                  {post}
                </button>
              </form>)
            :(
              <>
                <img src={props.url} alt="IMG N/A" id="returnImg"></img>
                <p id="returnH3">{props.title}</p>
                <h5 id="returnH5">{props.description}</h5>
                <h6 id="returnH6">{`Author:${props.author} Date:${props.date}`}</h6>
              </>
            )}
          <button 
            id="editButton" 
            onClick={(e) => this.editing(props.id)}
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
