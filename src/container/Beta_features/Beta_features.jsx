import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";
import "../../client";
import "./Beta_features.scss";

const beta_features = [
  {
    title: "Send, receive, and import tokens",
    description:
      "Easily and efficiently manage tokens and other assets on Kadena blockchain wallets.",
    imgUrl: images.kadet_overview,
  },
  {
    title: "View, receive, and send colle",
    description:
      "Securely handle your digital assets and participate in the growing NFT market.",
    imgUrl: images.kadet_nft,
  },
  {
    title: "Use Autochain for simpler transfers",
    description:
      "Use Autochain to see your assets, their location, and to handle cross-chain transfers.",
    imgUrl: images.chainless_transactions_kadet,
  },
  {
    title: "View transaction history for tokens & NFTs",
    description:
      "View your transaction history, track your assets, and gain peace of mind about your portfolio.",
    imgUrl: images.kadet_secure,
  },
  {
    title: "Get real-time overviews of all assets ballaces",
    description:
      "See token and NFT balances in real time to make more informed investments.",
    imgUrl: images.kadet_overview,
  },
  {
    title: "Import Kadena and non-Kadena addresses",
    description:
      "Add Kadena and non-Kadena addresses to your wallet to better control your portfolio across multiple chains",
    imgUrl: images.kadet_overview,
  },
];
const Beta_features = () => {
  /* const [beta_features, setBeta_features] = useState([]);
  useEffect(() => {
    const query = '*[_type == "beta_features"]';

    client.fetch(query).then((data) => setBeta_features(data));
  }, []);

  console.log(beta_features); */
  return (
    <>
      {/* <h2 className="head-text">Features</h2> */}

      <div className="app__features">
        {beta_features.map((beta_feature, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: "tween" }}
            className="app__feature-item"
            key={beta_feature.title + index}
          >
            <img src={beta_feature.imgUrl} alt={beta_feature.title} />
            {/* <img src={urlFor(beta_feature.imgUrl)} alt={beta_feature.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {beta_feature.title}
            </h2>
            <p
              className="p-text"
              style={{ marginTop: 10, textAlign: "center" }}
            >
              {beta_feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Beta_features;
