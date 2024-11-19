import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <Link className="footer-link" to="/">
          Inicio
        </Link>
        <Link className="footer-link" to="/reservar">
          Reservar
        </Link>
        <a className="footer-link" href="#inicio">
          Inicio
        </a>
      </div>
      <div className="social-media">
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
