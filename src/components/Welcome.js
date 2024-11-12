import React from "react";
import "./styles.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <div>
        <h2>San Felipe</h2>
        <p>Tenemos una habitación para ti</p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/GoldLogo.png`} alt="Hotel" />
    </div>
  );
}
