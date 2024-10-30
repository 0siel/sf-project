import React from "react";
import RoomComponent from "./RoomComponent";

// Rooms component, returns the rooms section of the home page. The component makes a call to the API to get the rooms data, and use the Room component to display the rooms.

function Rooms() {
  return (
    <div className="home-section">
      <h2>Rooms</h2>
      <div
        className="rooms"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RoomComponent />
        <RoomComponent />
        <RoomComponent />
      </div>
    </div>
  );
}

export default Rooms;
