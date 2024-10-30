import React from "react";
import Event from "./EventComponent";

export default function Events() {
  return (
    <div className="home-section">
      <h2>Events</h2>
      <div
        className="events"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
