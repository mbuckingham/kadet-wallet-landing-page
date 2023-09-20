import React from "react";

import {
  BetaFeatures,
  Component4,
  Footer,
  Hero,
  KadetUniversity,
} from "./container";

import { Navbar, BackgroundAnimated } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BackgroundAnimated />
      <Navbar />
      <Hero />
      <KadetUniversity />
      <BetaFeatures />
      <Component4 />
      <Footer />
    </div>
  );
}

export default App;
