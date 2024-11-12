import React from "react";

// Event component, returns an event card with the event details.

function EventComponent() {
  return (
    <div
      className="event"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        minWidth: "300px",
        maxWidth: "400px",
      }}
    >
      <img
        src="https://vivefig.mx/FIGAdmin/galeria/images/escala/galeria-nueva.jpg"
        alt="Event"
        className="event-image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "5px",
        }}
      />
      <div
        className="datetime"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <p>Dic 11, 2024</p>
        <p>20:00</p>
      </div>

      <p>Hotel San Felipe</p>
      <h3>Cena especial</h3>
      <p>
        Ven a disfrutar de una cena inspirada en la gastronomía local. ¡No te lo
        pierdas!
      </p>
    </div>
  );
}

export default EventComponent;
