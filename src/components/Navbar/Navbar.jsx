import React from "react";
//import { HiMenuAlt4, HiX } from "react-icons/hi";
//import { motion } from "framer-motion";
import "./Navbar.scss";

import { Button } from "../../components";
//import { images } from "../../constants";
import cosmonautLogo from "../../assets/logo_cosmonaut.png";
import kadenaLogo from "../../assets/logo_text.png";

const Navbar = () => {
  //const [toggle, setToggle] = useState(false);
  const bgColor = "var(--tertiary-color-bg)";
  const textColor = "var(--primary-color-text)";
  const fontFamily = "var(--font-base)";

  return (
    <nav
      className="header"
      style={{
        display: "flex",
        height: "4rem",
        width: "100%",
        padding: "0 9%",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        position: "fixed",
        backgroundColor: bgColor,
      }}
    >
      <div
        className="header-content"
        style={{
          display: "flex",
          //maxWidth: "70rem",
          justifyContent: "space-between",
          alignItems: "center",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <div
          className="trialing icon"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            alignSelf: "stretch",
          }}
        >
          <div
            className="logo-astroHead-container"
            style={{
              display: "flex",
              width: "2.25rem",
              height: "2.25rem",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.375rem 0.281rem 0.346rem 0,281rem",
            }}
          >
            <img className="astroHead" src={cosmonautLogo} alt="" />
          </div>
          <div
            className="logo-text-container"
            style={{
              display: "flex",
              width: "6rem",
            }}
          >
            <img className="logoText" src={kadenaLogo} alt="" />
          </div>
        </div>

        <ul
          className="navLink"
          style={{
            display: "flex",
            width: "49.38rem",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
            alignSelf: "stretch",
          }}
        >
          {["About us", "FAQ", "Blog", "Community"].map((item) => (
            <li
              className="link"
              style={{
                display: "flex",
                width: "6.25rem",
                padding: "0.25rem",
                justifyContent: "space-between",
                alignItems: "center",
                flexShrink: "0",
                alignSelf: "stretch",
              }}
              key={`link-${item}`}
            >
              <a
                style={{
                  fontFamily: fontFamily,
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  letterSpacing: "0,00625rem",
                  color: textColor,
                }}
                href={`#${item}`}
              >
                {item}
              </a>
            </li>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "18,875rem",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            }}
          >
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

/*
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["About us", "FAQ", "Blog", "Community"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          </div>
        )} */
