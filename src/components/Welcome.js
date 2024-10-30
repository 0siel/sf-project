import React from "react";

export default function Welcome() {
  return (
    <div
      className="home-section"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        backgroundColor: "#43523A",
        margin: "0 2vw 0 2vw",
        borderRadius: "3px",
        paddingLeft: "1vw",
        paddingRight: "1vw",
      }}
    >
      <div style={{ width: "50%" }}>
        <h2
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3em",
            color: "#EBEFF0",
          }}
        >
          San Felipe
        </h2>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5em",
            color: "#EBEFF0",
          }}
        >
          Tenemos una habitación para ti
        </p>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/HF VERDE-PNG.png`}
        alt="Hotel"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
