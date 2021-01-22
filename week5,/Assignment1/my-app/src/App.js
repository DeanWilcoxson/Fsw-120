import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer.js";

function App() {
  let styles = {
        textAlign: "center",
    }

  return (
    <div style={styles}>

      <Navbar /> 
      
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Services">
          <Services />
        </Route>
      </Switch>
      
      <Footer />

    </div>
  );
}

export default App;
