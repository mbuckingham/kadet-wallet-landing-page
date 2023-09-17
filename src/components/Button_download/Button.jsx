import React from "react";
import "./Button.scss";
import { images } from "../../constants";

const Button = () => {
  return (
    <div className="btn">
      <button type="button" /*className="p-text" onClick={handleSubmit}*/>
        <img src={images.chrome_logo} alt="chrome_logo" />
        {/* {!loading ? "Send Message" : "Sending..."} */}
        Download Extension
      </button>
    </div>
  );
};

export default Button;
