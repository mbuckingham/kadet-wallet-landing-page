import React from "react";

import {
  BetaFeatures,
  Component4,
  Footer,
  Hero,
  KadetMission,
} from "./container";

import { Navbar } from "./components";
import "./App.css";

function App() {

  return (
    <div className="app" style={{ background: "var(--stars-bg)" }}>
      <Navbar />
      <div className="appContainer">
        <Hero />
        <KadetMission />
        <BetaFeatures />
        <Component4 />
      </div>
      <Footer />
    </div>

  );
}

export default App;
