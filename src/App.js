import React from "react";

import {
  Beta_features,
  Component_4,
  Footer,
  Hero,
  Kadet_university,
} from "./container";

import { Navbar, Background_animated } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background_animated />
      <Navbar />
      <Hero />
      <Kadet_university />
      <Beta_features />
      <Component_4 />
      <Footer />
    </div>
  );
}

export default App;
