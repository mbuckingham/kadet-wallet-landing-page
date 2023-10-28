import React from "react";
import { ButtonMission } from "../../components";
import "./KadetMission.scss";
import arrowDark from "../../assets/arrow_dark.png";

const KadetMission = () => {
  return (
    <div className="wrapper-mission">
      <div className="KUText">
        <h1>The Kadet Mission</h1>
        <p>
          Kadet Wallet was designed with beginners in mind. To make your
          entrance into the world of digital finance simple and easy.
        </p>
        <ButtonMission icon={arrowDark}>Start Learning</ButtonMission>
      </div>
      <div className="missionImage"></div>
    </div>
  );
};

export default KadetMission;
