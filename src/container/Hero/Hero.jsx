import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { Button } from "../../components";
/* import { urlFor } from "../../client";
import client from "../../client"; */
import { urlFor, client } from "../../client";
import "./Hero.scss";

const Hero = () => {
  const [hero_section, setHero_section] = useState([]);

  useEffect(() => {
    const query = '*[_type == "hero_section"]';

    client
      .fetch(query)
      .then((data) => setHero_section(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app__header app__flex">
      {/* Mockup! */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img
          src={
            hero_section?.imgUrl
              ? urlFor(hero_section.imgUrl)
              : images.fallback_image
          }
          alt={hero_section?.title || "Fallback Title"}
        /> */}
        <img src={images.create_account_hero} alt="mockup" />
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">
                The first cross-chain crypto wallet on Kadena
              </h1>
              <div style={{ marginTop: 20, marginBottom: 80 }}>
                <p className="p-text">
                  In addition to sending, receiving, and importing tokens, Kadet
                  Wallet simplifies cross-chain transfers with our new Autochain
                  feature
                </p>
              </div>
              <Button />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
