import React from "react";
import Contact from "./Contact";
import Events from "./Events";
import About from "./About";
import Reviews from "./Reviews";
import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Rooms from "./Rooms";

function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Rooms />
      <Reviews />
      <Events />

      <Footer />
    </div>
  );
}

export default Home;
