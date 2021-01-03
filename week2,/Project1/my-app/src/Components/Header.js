import React from "react";
import Navbar from "./Navbar";
function Header() {
  let header = "Clean Blog";
  let description = "A Blog Theme by Start Bootstrap";
  return (
    <div>
      <Navbar />
      <div id="header">
        <h1 id="title">{header}</h1>
        <h6 id="desc">{description}</h6>
      </div>
    </div>
  );
}
export default Header;
