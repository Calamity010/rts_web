import React from "react";
import Navbar from "./components/Navigation/Navbar";
import Methods from "./components/Navigation/Methods";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Navigation/Hero";
import ReactCSSTransitionGroup from "react-transition-group";
import About from "./components/Navigation/About";
import "@popperjs/core";
import "bootstrap";
import Services from "./components/Navigation/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Methods />
      <About />
      <Services />
    </div>
  );
}

export default App;
