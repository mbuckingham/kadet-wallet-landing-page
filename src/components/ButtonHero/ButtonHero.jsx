import React from "react";
import "./ButtonHero.scss";

const ButtonHero = ({ children, onClick, icon }) => {
  const handleButtonClick = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://";
    downloadLink.target = "_blank";
    downloadLink.rel = "noopener noreferrer";
    downloadLink.click();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn2" onClick={handleButtonClick}>
      {icon && <img src={icon} alt="Icon" className="btn-icon" />}
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default ButtonHero;
