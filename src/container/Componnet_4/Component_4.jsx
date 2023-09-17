import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./Component_4.scss";

const Component_4 = () => {
  return (
    <div className="app__community app__flex">
      <div className="app__flex app_blur">
        {/* kadet Wallet content */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.1 }}
          className="app__community-info"
        >
          <div className="app__community-badge">
            <div className="badge-cmp app__flex">
              <div style={{ marginLeft: 20 }}>
                {/* Community logo */}
                <div className="badge-cmp">
                  <img src={images.kadet_logo_white} alt="kadet_logo" />
                </div>
                {/* Community description */}
                <div style={{ marginTop: 10, marginBottom: 30 }}>
                  <p className="badge-cmp p-text">
                    Created by Tech Fleet, Kadet Wallet includes all the
                    features you’d expect from a great crypto wallet - plus
                    more: we are the first multi-chain wallet.
                  </p>
                </div>
                {/* CTA Community */}
                <div className="CTA_community">
                  <div className="badge-cmp app__flex__community">
                    <h2 className="bold-text">Contribute</h2>
                    <img src={images.green_button} />
                  </div>
                  <div className="badge-cmp">
                    <p className="p-text">Learn aboout us and what we do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Fleet Community content */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.1 }}
          className="app__community-info"
        >
          <div className="app__community-badge">
            <div className="badge-cmp app__flex">
              <div style={{ marginLeft: 20 }}>
                {/* Community logo */}
                <div className="badge-cmp">
                  <img src={images.tech_fleet_logo} alt="tech_fleet_logo" />
                </div>
                {/* Community description */}
                <div style={{ marginTop: 10, marginBottom: 30 }}>
                  <p className="badge-cmp p-text">
                    Tech Fleet is the first DAO for community-driven
                    decentralized apprenticeship programs in tech. Join us as an
                    apprentice, team lead or shadower in one of our many great
                    projects, including Kadet Wallet.
                  </p>
                </div>
                {/* CTA Community */}
                <div className="CTA_community">
                  <div className="badge-cmp app__flex__community">
                    <h2 className="bold-text">Tech Fleet 101</h2>
                    <img src={images.green_button} />
                  </div>
                  <div className="badge-cmp">
                    <p className="p-text">Learn aboout us and what we do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Component_4;
