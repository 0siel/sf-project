import React from "react";
import Event from "./EventComponent";

export default function Events() {
  return (
    <div className="home-section" id="eventos">
      <h2>Próximos Eventos</h2>

      <div className="events">
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
