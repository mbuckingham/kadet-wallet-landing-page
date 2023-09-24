import React from "react";
import WrapperAbout from "../../components/WrapperAbout/WrapperAbout";
import tfLogo from "../../assets/tf_logo.png";
import arrow from "../../assets/arrow.png";
import "./Component4.scss";

const Component4 = () => {
  return (
    <WrapperAbout>
      <div className="aboutContainer">
        <div className="aboutTF">
          <div className="containerLogo">
            <img src={tfLogo} alt="" />
          </div>
          <div className="comunityBlurbs">
            <div className="blurbLeft">
              <p>
                Created by Tech Fleet, Kadet Wallet goes beyond the standard
                features of a traditional crypto wallet. Our multi-chain
                capability, allows users to manage multiple cryptocurrencies on
                a single platform. Kadet Wallet is the perfect solution for
                blockchain enthusiasts and newcomers seeking security,
                versatility, and functionality.
              </p>
            </div>
            <div className="blurbRight">
              <p>
                Tech Fleet is a groundbreaking DAO for community-driven
                decentralized apprenticeship programs in tech. Join us as an
                apprentice, team lead, or simply shadow our ongoing projects.
              </p>
              <br></br>
              <p>
                Check out our website, join our online community, and empower
                your career in tech today!
              </p>
            </div>
          </div>
        </div>
        <div className="statCounter">
          <div className="frame">
            <h1>5000+</h1>
            <p>community members</p>
          </div>
          <div className="frame">
            <h1>10,000+</h1>
            <p>volounteer hours</p>{" "}
          </div>
          <div className="frame">
            <h1>35+</h1>
            <p>agency projects</p>
          </div>
        </div>
      </div>
      <div className="frameContainer">
        <div className="frameLeft">
          <div className="frameContent">
            <div className="frameHeader">
              <h1>Contribute</h1>
              <button
                className="btnArrow"
                style={{ background: "transparent" }}
              >
                <img src={arrow} alt="Icon" className="btn-arrow" />
              </button>
            </div>
            <div className="frameText">
              <p>Add to the open-source project</p>
            </div>
          </div>
          <div className="frameContent">
            <div className="frameHeader">
              <h1>Join Us</h1>
              <button
                className="btnArrow"
                style={{ background: "transparent" }}
              >
                <img src={arrow} alt="Icon" className="btn-arrow" />
              </button>
            </div>
            <div className="frameText">
              <p>Join our growing community</p>
            </div>
          </div>
        </div>
        <div className="frameRight">
          <div className="frameContent">
            <div className="frameHeader">
              <h1>Tech Fleet 101</h1>
              <button
                className="btnArrow"
                style={{ background: "transparent" }}
              >
                <img src={arrow} alt="Icon" className="btn-arrow" />
              </button>
            </div>
            <div className="frameText">
              <p>Our mission, values, and principles</p>
            </div>
          </div>
          <div className="frameContent">
            <div className="frameHeader">
              <h1>Learn More</h1>
              <button
                className="btnArrow"
                style={{ background: "transparent" }}
              >
                <img src={arrow} alt="Icon" className="btn-arrow" />
              </button>
            </div>
            <div className="frameText">
              <p>Learn about us and what we do</p>
            </div>
          </div>
        </div>
      </div>
    </WrapperAbout>
  );
};

export default Component4;
