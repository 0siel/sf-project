import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px",
        border: "1px solid #ccc",
        borderRadius: "0px",
        width: "100%",
        backgroundColor: "#43523a",
      }}
    >
      <div className="links">
        <a href="/">Home</a>
        <a href="/rooms">Rooms</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className="social-media"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
            alt="instagram"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
            alt="twitter"
          />
        </a>
      </div>
    </footer>
  );
}
