import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomComponent from "./RoomComponent";

// Rooms comp onent, returns the rooms section of the home page. The component makes a call to the API to get the rooms data, and use the Room component to display the rooms.

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotel-system-cs-410309b43a2b.herokuapp.com/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  return (
    <div className="home-section">
      <h2>Habitaciones</h2>
      <div
        className="rooms"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {rooms.map((room) => {
          return <RoomComponent key={room.roomId} room={room} />;
        })}
      </div>
    </div>
  );
}

export default Rooms;
