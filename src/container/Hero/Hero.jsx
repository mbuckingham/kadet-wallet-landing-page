import React from "react";
import chromeLogo from "../../assets/chrome_logo.png";
import { ButtonHero } from "../../components";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="wrapper-hero">
      <div className="heroImage"></div>
      <div className="heroText">
        <h1>Navigate the Crypto Universe with Kadet</h1>
        <p>
          Explore the the world of crypto with Kadet Wallet! The solution to all
          of your cross-chain management, storage, and transaction needs.
        </p>
        <ButtonHero icon={chromeLogo}>Download Extention</ButtonHero>
      </div>
    </div>
  );
};

export default Hero;
