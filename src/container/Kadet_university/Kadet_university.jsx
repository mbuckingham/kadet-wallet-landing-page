import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { Button, Button_university } from "../../components";
import "./Kadet_university.scss";

const Kadet_university = () => {
  /* const [hero_section, setHero_section] = useState([]);

  useEffect(() => {
    const query = '*[_type == "hero_section"]';

    client
      .fetch(query)
      .then((data) => setHero_section(data))
      .catch((err) => console.error(err));
  }, []); */

  return (
    <div className="app__kadet_university app__flex">
      {/* kadet university content */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__kadet_university-info"
      >
        <div className="app__kadet_university-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">Kadet University</h1>
              <div style={{ marginTop: 20, marginBottom: 80 }}>
                <p className="p-text">
                  From Crypto 101 to your smashout predictions for 2023 and
                  beyond.
                </p>
              </div>
              <Button_university />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mockup! */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__kadet_university-img"
      >
        {/* <img
          src={
            hero_section?.imgUrl
              ? urlFor(hero_section.imgUrl)
              : images.fallback_image
          }
          alt={hero_section?.title || "Fallback Title"}
        /> */}
        {/*  <img src={images.planet_university} alt="mockup" /> */}
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Kadet_university;
