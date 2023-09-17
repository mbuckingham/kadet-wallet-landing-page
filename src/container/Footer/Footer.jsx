/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsSlack, BsMedium, BsGithub, BsBugFill } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { Button } from "../../components";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <div className="app__blur__footer">
        <div className="app__footer-info">
          <div className="app__footer-badge">
            {/* Connect Links */}
            <div className="badge-cmp">
              <div className="badge-title">
                <h2 className="bold-text">Connect</h2>
              </div>
              <ul>
                <li>
                  <BsSlack />

                  <a href="#">Kadet Slack Channel</a>
                </li>

                <li>
                  <div className="small_logo">
                    <MdOutlineContactSupport />
                  </div>

                  <a href="#">Contact Support</a>
                </li>
                <li>
                  <div className="small_logo">
                    <BsBugFill />
                  </div>

                  <a href="#">Submit an issue</a>
                </li>
                <li>
                  <div className="small_logo">
                    <BsMedium />
                  </div>

                  <a href="#">Tech Fleet Blog</a>
                </li>
              </ul>
            </div>

            {/* Legal LInks */}
            <div className="badge-cmp app__flex_footer">
              <div className="badge-title">
                <h2 className="bold-text">Legal</h2>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="app__footer-badge">
            <div className="footer__cta">
              <Button />
            </div>
          </div>
        </div>
        <div className="footer__logo__banner">
          <div>
            <img src={images.kadet_lgo_stiker} alt="kadet_sticker" />
          </div>
          <div>
            <img src={images.built_on_kadena} alt="built_on_kadena" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
