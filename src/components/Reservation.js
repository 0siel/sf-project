import React from "react";
import Header from "./Header";
import RoomComponent from "./RoomComponent";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";

// Reservation component, returns the reservation page.

function Reservation() {
  const [rooms, setRooms] = useState([]);

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSendReservation = (event) => {
    event.preventDefault();

    const checkin = event.target.checkin.value;
    const checkout = event.target.checkout.value;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const token = localStorage.getItem("authToken");
    console.log("token", token);

    if (!token) {
      alert("Por favor inicie sesión para realizar una reserva");
      // Store the reservation data in localStorage
      localStorage.setItem(
        "reservationData",
        JSON.stringify({ checkin, checkout, name, email, phone })
      );
      // Redirect to the login page
      window.location.href = "/login";
      return;
    }

    if (!selectedRoom) {
      alert("Seleccione una habitación");
      return;
    }

    if (!checkin || !checkout || !name || !email || !phone) {
      alert("Por favor complete todos los campos");
      return;
    }

    axios
      .post("https://hotel-system-cs-410309b43a2b.herokuapp.com/reservations", {
        roomId: selectedRoom.roomId,
        checkin,
        checkout,
        name,
        email,
        phone,
      })
      .then((response) => {
        alert("Reserva realizada con éxito");
        // Clear stored reservation data after successful submission
        localStorage.removeItem("reservationData");
      })
      .catch((error) => {
        console.error("Error sending reservation:", error);
        alert("Error al realizar la reserva");
      });
  };

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
      <Header />
      <h2>Reservar</h2>

      {/* 
          Render rooms using the Room component.
      */}
      <div className="rooms">
        {rooms.map((room) => {
          return (
            <div>
              <RoomComponent key={room.roomId} room={room} />
              <button
                onClick={() => {
                  setSelectedRoom(room);
                }}
              >
                Reservar
              </button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSendReservation}>
        <h3>
          {selectedRoom
            ? `Reservando: ${selectedRoom.roomtype}`
            : "Seleccione una habitación"}
        </h3>
        <label htmlFor="checkin">Check-in:</label>
        <input type="date" id="checkin" name="checkin" />
        <label htmlFor="checkout">Check-out:</label>
        <input type="date" id="checkout" name="checkout" />
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" name="phone" />
        <button type="submit">Reservar</button>
      </form>

      <Footer />
    </div>
  );
}

export default Reservation;
