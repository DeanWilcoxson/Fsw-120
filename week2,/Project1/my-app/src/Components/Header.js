import React from "react";
import Navbar from "./Navbar";
function Header() {
  let header = "Clean Blog";
  let description = "A Blog Theme by Start Bootstrap";
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "grey",
        textAlign: "center",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Navbar />
      <h1 style={{ fontSize: "90px", fontFamily: "Helvetica" }}>{header}</h1>
      <h6 style={{ fontSize: "30px", fontFamily: "sans" }}>{description}</h6>
    </div>
  );
}
export default Header;
