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
        width: "30%",
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
        <p>Event Date</p>
        <p>Event Time</p>
      </div>

      <p>Event Location</p>
      <h3>Event Title</h3>
      <p>Event Description</p>
    </div>
  );
}

export default EventComponent;
