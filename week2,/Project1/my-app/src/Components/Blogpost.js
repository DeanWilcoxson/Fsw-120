import React from "react";
function Blogpost() {
  let blogs = [
    {
      title: "Man must explore, and this is exploration at its greatest",
      subTitle: "Problems look mighty small from 150 miles up",
      author: "Start Bootstrap",
      date: "September 24, 2019"
    },
    {
      title:
        "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subTitle: "",
      author: "Start Bootstrap",
      date: "September 18, 2019"
    },
    {
      title: "Science has not yet mastered prophecy",
      subTitle:
        "We predict too much for the next year and yet far too little for the next ten.",
      author: "Start Bootstrap",
      date: "August 24, 2019"
    },
    {
      title: "Failure is not an option",
      subTitle:
        "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      author: "Start Bootstrap",
      date: "July 8, 2019"
    },
  ];
  let blogData = blogs.map(function (blog) {
    return (
      <div id="blogpost">
        <h1 id="blogdata">
          <b >{blog.title}</b>
        </h1>
        <h3 id="blogdata1" >{blog.subTitle}</h3>
        <span id="blogdata2">
          Posted by <b id="blogauthor" >{blog.author}</b> {blog.date}
          <hr />
        </span>
      </div>
    );
  });
  return (
    <div >
      {blogData}
      <button id="button"><b>OLDER POSTS &gt;</b></button>
      <br/>
      <hr/>
    </div>
  );
}
export default Blogpost;
