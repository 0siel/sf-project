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
        width: "200px",
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Event"
        className="event-image"
      />
      <p>Event Date</p>
      <p>Event Time</p>
      <h3>Event Title</h3>
      <p>Event Description</p>
    </div>
  );
}

export default EventComponent;
