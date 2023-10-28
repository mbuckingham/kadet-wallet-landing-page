import React from "react";
export default function Wrapper(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "70rem",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {" "}
      {props.children}
    </div>
  );
}
