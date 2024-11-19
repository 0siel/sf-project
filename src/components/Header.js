import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar"
      id="inicio"
      style={{
        display: "flex", // Flexbox to align elements horizontally
        alignItems: "center", // Vertically center the items
        justifyContent: "space-between", // Space between elements
        backgroundColor: "#EBEFF0",
        //padding: "10px 20px", // Padding for spacing
        paddingLeft: "30px",

        paddingTop: "10px",
        paddingBottom: "10px",
        width: "auto",
      }}
    >
      <img
        className="logo"
        src={`${process.env.PUBLIC_URL}/GoldLogo.png`}
        alt="Hotel"
      />
      <ul
        style={{
          display: "flex", // Align list items horizontally
          listStyle: "none", // Remove bullet points
          margin: "0",
          padding: "0",
          paddingRight: "20px",
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "22px",
        }}
      >
        <li
          style={{
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#A79C69",
            }}
          >
            Inicio
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link
            to="/reservar"
            style={{
              textDecoration: "none",
              color: "#A79C69",
            }}
          >
            Reservar
          </Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <a
            href="#eventos"
            style={{
              textDecoration: "none",
              color: "#A79C69",
            }}
          >
            Eventos
          </a>
        </li>
      </ul>
    </nav>
  );
}
