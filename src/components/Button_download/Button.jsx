import React from "react";
import "./Button.scss";

const Button = () => {
  return (
    <div className="btn">
      <button type="button" /*className="p-text" onClick={handleSubmit}*/>
        {/* {!loading ? "Send Message" : "Sending..."} */}
        Download Extension
      </button>
    </div>
  );
};

export default Button;
