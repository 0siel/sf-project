// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthPage from "./components/Authpage";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import "./App.css"; // Import the App.css file

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservar" element={<Reservation />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
