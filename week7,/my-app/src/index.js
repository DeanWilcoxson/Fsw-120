import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import UserContext from './UserContext';

ReactDOM.render(
  // <UserContext value={"loggedIn"}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </UserContext>,
  document.getElementById("root")
);

