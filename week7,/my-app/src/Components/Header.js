import React from "react";
import { SocialIcon } from "react-social-icons";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Twitter
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
        </h1>
      </div>
    );
  }
}
export default Header;
