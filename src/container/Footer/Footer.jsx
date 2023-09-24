import React from "react";
import "./Footer.scss";
import astronautLogo from "../../assets/footer_astronaut.svg";
import kadetLogo from "../../assets/footer_kadet.svg";
import kadenaFavicon from "../../assets/kadena_favicon.png";
import githubIcon from "../../assets/github.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import slackIcon from "../../assets/slack.svg";
import discordIcon from "../../assets/discord.svg";
import copyrightIcon from "../../assets/copyright.svg";
import tfLogo from "../../assets/tf_logo.png";
import { ButtonFooter } from "../../components";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainerTop">
        <div className="logoBox">
          <div className="astronautBox">
            <img className="astronaut" src={astronautLogo} alt="" />
          </div>

          <img
            className="kadetText"
            src={kadetLogo}
            alt=""
            style={{
              width: "160px",
              alignSelf: "stretch",
            }}
          />
        </div>
        <div className="kadenaContainer">
          <div className="kadenaFavicon">
            <img src={kadenaFavicon} alt="" />
          </div>
          <div className="kadenaText">
            <p>Built on Kadena</p>
          </div>
        </div>
      </div>

      <div className="footerContainerBottom">
        <div className="footerContent">
          <div className="footerLinks">
            <div className="footerLinksLeft">
              <div className="footerHeader">
                <h1 className="learnMore">Learn More</h1>
              </div>
              <div className="footerText">
                <div className="footerTextBox">
                  <h2>About Us</h2>
                </div>
                <div className="footerTextBox">
                  <h2>FAQ</h2>
                </div>
                <div className="footerTextBox">
                  <h2>Blog</h2>
                </div>
                <div className="footerTextBox">
                  <h2>Submit a request</h2>
                </div>
                <div className="footerTextBox">
                  <h2>Subscribe to our newsletter</h2>
                </div>
              </div>
            </div>
            <div className="footerLinksRight">
              <div className="footerHeader">
                <h1 className="learnMore">Legal</h1>
              </div>
              <div className="footerText">
                <div className="footerTextBox">
                  <h2>Privacy Policy</h2>
                </div>
                <div className="footerTextBox">
                  <h2>Terms & Conditions</h2>
                </div>
                <div className="footerTextBox">
                  <h2>Cookie Policy</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="connectFrame">
            <ButtonFooter>Download Extention</ButtonFooter>
            <div className="connectContentFrame">
              <div className="connectHeaderFrame">
                <h1 className="connectWithUs">Connect With Us:</h1>
              </div>
              <div className="connectIconFrame">
                <div className="faviconHolder">
                  <img className="kadenaFavicon" src={githubIcon} alt="" />
                </div>
                <div className="faviconHolder">
                  <img className="kadenaFavicon" src={twitterIcon} alt="" />
                </div>
                <div className="faviconHolder">
                  <img className="kadenaFavicon" src={youtubeIcon} alt="" />
                </div>
                <div className="faviconHolder">
                  <img className="kadenaFavicon" src={slackIcon} alt="" />
                </div>
                <div className="faviconHolder">
                  <img className="kadenaFavicon" src={discordIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrightContainer">
          <div className="copyrightFrame">
            <img className="copyright" src={copyrightIcon} alt="" />
            <p>2023 Tech Fleet</p>
          </div>
          <div className="copyrightFrame">
            <p>Powered by</p>
            <img className="techFleet" src={tfLogo} alt="" />
            <p>Tech Fleet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
