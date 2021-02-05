import React from "react";
class MyPage extends React.Component {
  render() {
    return (
      <div id="formGrid">
        <form id="postForm">
          <input type="text" placeholder="Status" id="title"></input>
          <textarea placeholder="How are you Feeling Today?" id="description"/>
        </form>
      </div>
    );
  }
}
export default MyPage;
