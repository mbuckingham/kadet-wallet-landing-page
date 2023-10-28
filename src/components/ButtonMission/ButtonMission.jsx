import React from "react";
import "./ButtonMission.scss";

const ButtonMission = ({ children, onClick, icon }) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn3" onClick={handleButtonClick}>
      <div className="btn3Content">
        <span className="btn-text">{children}</span>
        {icon && <img src={icon} alt="Icon" className="btn-icon" />}
      </div>
    </button>
  );
};

export default ButtonMission;
