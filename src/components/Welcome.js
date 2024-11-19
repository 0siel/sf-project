import React, { useState, useEffect } from "react";
import "./styles.css";

const images = [
  "https://guanajuato.mx/wp-content/uploads/2022/05/San-Felipe-Guanajuato.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/98/Jard%C3%ADn_San_Felipe.jpg",
  "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTTvfQwhrHjXMVABx_f0bgvGn0WZotJe37hUsQOFz9NS3g3pZgiaXP_d78SxbUrAsJ_JSFK7h5ta9RAgXpeXM59E-NdTA2ZvL2CREkFlA",
];

export default function Welcome() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome">
      <div className="welcome-text">
        <h1>San Felipe</h1>
        <p>"Tenemos una habitación para ti"</p>
      </div>
      <img
        className="welcome-slide"
        src={images[currentImageIndex]}
        alt="San Felipe"
      />
    </div>
  );
}
