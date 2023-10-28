import React from "react";
export default function WrapperAbout(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70rem",
        maxWidth: "70rem",
        alignItems: "flex-start",
        gap: "8.25rem",
        background: "var(--planet-bg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.children}
    </div>
  );
}
