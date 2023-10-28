import React from "react";
import "./Button.scss";

const Button = ({ buttonText, onClick, icon }) => {
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
    <button className="btn" onClick={handleButtonClick}>
      {icon && <img src={icon} alt="icon" className="btn-icon" />}
      {buttonText}
    </button>
  );
};

export default Button;
