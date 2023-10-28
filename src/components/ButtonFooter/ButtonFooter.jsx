import React from "react";
import "./ButtonFooter.scss";

const ButtonFooter = ({ children, onClick, icon }) => {
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
    <button className="btn4" onClick={handleButtonClick}>
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default ButtonFooter;
