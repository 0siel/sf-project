import React from "react";

// Room component, returns a room card with the room details.

function RoomComponent() {
  return (
    <div
      className="room"
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
        alt="Room"
        className="room-image"
      />
      <h3>Room Name</h3>
      <p>Room Description</p>
      <p>Price: $100</p>
      <button>Book Now</button>
    </div>
  );
}

export default RoomComponent;
