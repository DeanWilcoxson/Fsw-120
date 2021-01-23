import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  let styles = { textAlign:"center", }
  return (
    <div style={styles}>
    <h1>Dean's Emergency Piping and Plumbing</h1>
      <Navbar /> 
      
      <Switch>
        <Route exact path="/">
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