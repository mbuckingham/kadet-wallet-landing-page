import React from "react";
import WrapperBeta from "../../components/WrapperBeta/WrapperBeta";

import feature1 from "../../assets/feature_1.png";
import feature2 from "../../assets/feature_2.png";
import feature3 from "../../assets/feature_3.png";
import feature4 from "../../assets/feature_4.png";
import feature5 from "../../assets/feature_5.png";
import feature6 from "../../assets/feature_6.png";
import "./BetaFeatures.scss";

const BetaFeatures = () => {
  return (
    <WrapperBeta className="wrapperFeatures">
      <div className="betaContainer">
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">Crypto Made Easy</h1>
            <p className="cardText">
              Maximize your mining experience with our efficient and easy-to-use
              tools built on the Kadena blockchain.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature1})`,
            }}
          ></div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">Private Security</h1>
            <p className="cardText">
              Kadet Wallet is non-custodial and only you will have access to all
              personal data, assets, and accounts.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature2})`,
            }}
          ></div>
        </div>
      </div>
      <div className="betaContainer">
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">Multi-Chain Transactions</h1>
            <p className="cardText">
              Spread assets across multiple chains or easily supplement large
              transactions with our autochain feature.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature3})`,
            }}
          ></div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">Assets Management</h1>
            <p className="cardText">
              Easily track all your assets from other wallets by importing them
              with their designated private key.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature4})`,
            }}
          ></div>
        </div>
      </div>

      <div className="betaContainer">
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">Send and Receive</h1>
            <p className="cardText">
              Safely send and receive tokens using your verified k:address.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature5})`,
            }}
          ></div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h1 className="cardHeader">NFT Support</h1>
            <p className="cardText">
              Connect with NFT communities. Save, view and sell your NFTs in one
              place.
            </p>
          </div>
          <div
            className="cardImage"
            style={{
              backgroundImage: `url(${feature6})`,
            }}
          ></div>
        </div>
      </div>
    </WrapperBeta>
  );
};

export default BetaFeatures;
