// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Reservation from "./components/Reservation";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
