import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const home = <FontAwesomeIcon icon={faHome} color="blue" />;
    const feed = <FontAwesomeIcon icon={faListAlt} color="blue" />;
    const myPage = <FontAwesomeIcon icon={faUser} color="blue" />;
    return (
      <div id="navbar">
        <Link to="/Home">{home}</Link>
        <Link to="/Tweets">{feed}</Link>
        <Link to="/MyPage">{myPage}</Link>
      </div>
    );
  }
}
export default Navbar;
