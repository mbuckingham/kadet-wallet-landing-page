import React from "react";
export default function WrapperBeta(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70rem",
        maxWidth: "70rem",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      {props.children}
    </div>
  );
}
