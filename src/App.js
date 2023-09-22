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
      <section className="container" style={{
        display: "flex",
        width: "100%",
        padding: "13rem 9%",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "9rem",

      }}>
        <Hero />
      </section>
      <section style={{
        display: "flex",
        width: "100%",
        padding: "9rem 9%",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "9rem"
      }}>
        <KadetMission />
      </section>
      <section style={{
        display: "flex",
        width: "100%",
        padding: "9rem 9%",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "9rem"
      }}>
        <BetaFeatures />
      </section>
      <section style={{
        display: "flex",
        width: "100%",
        padding: "9rem 9%",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        gap: "9rem"
      }}>
        <Component4 />
      </section>
      <Footer />
    </div>

  );
}

export default App;
