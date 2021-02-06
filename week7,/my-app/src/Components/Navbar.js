import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const home = <FontAwesomeIcon icon={faHome} color="white" />;
    const feed = <FontAwesomeIcon icon={faListAlt} color="white" />;
    const myPage = <FontAwesomeIcon icon={faUser} color="white" />;
    return (
      <nav id="navbar">
        <Link to="/" style={{ padding: "10px" }}>
          {home}
        </Link>
        <Link to="/Tweets" style={{ padding: "10px" }}>
          {feed}
        </Link>
        <Link to="/MyPage" style={{ padding: "10px" }}>
          {myPage}
        </Link>
      </nav>
    );
  }
}
export default Navbar;
