import React from "react";

// Room component, returns a room card with the room details.

function RoomComponent({ room }) {
  return (
    <div className="room" style={{}}>
      <img
        src={room.images[0]}
        alt={room.name}
        className="room-image"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "5px",
        }}
      />
      <h3>{room.roomName}</h3>
      <p>{room.type}</p>
      <p>Price: $100</p>
      <button>Book Now</button>
    </div>
  );
}

export default RoomComponent;
