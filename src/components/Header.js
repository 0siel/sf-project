import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex", // Flexbox to align elements horizontally
        alignItems: "center", // Vertically center the items
        justifyContent: "space-between", // Space between elements
        backgroundColor: "#EBEFF0",
        padding: "10px 20px", // Padding for spacing
        width: "auto",
      }}
    >
      <h1
        style={{
          color: "#A79C69",
          fontSize: "24px",
          fontWeight: "bold",
          margin: "0",
        }}
      >
        San Felipe Hotel
      </h1>
      <ul
        style={{
          display: "flex", // Align list items horizontally
          listStyle: "none", // Remove bullet points
          margin: "0",
          padding: "0",
          paddingRight: "20px",
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/">Inicio</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/reservation">Reservar</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/events">Eventos</Link>
        </li>
      </ul>
    </nav>
  );
}
