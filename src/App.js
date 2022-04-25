import React from "react";
import Navbar from "./components/Navigation/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Navigation/Hero";
import ReactCSSTransitionGroup from 'react-transition-group';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
