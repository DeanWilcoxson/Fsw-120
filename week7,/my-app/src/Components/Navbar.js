import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    const home = <FontAwesomeIcon icon={faHome} color="black" />;
    const feed = <FontAwesomeIcon icon={faListAlt} color="black" />;
    const myPage = <FontAwesomeIcon icon={faUser} color="black" />;
    return (
      <nav id="navbar">
        <Link to="/" style={{ padding: "10px" }}>
          <b className="linkName">Home</b>
          {home}
        </Link>
        <Link to="/Tweets" style={{ padding: "10px" }}>
          <b className="linkName">Feed</b>
          {feed}
        </Link>
        <Link to="/MyPage" style={{ padding: "10px" }}>
          <b className="linkName">My Page</b>
          {myPage}
        </Link>
      </nav>
    );
  }
}
export default Navbar;
