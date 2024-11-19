import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

const Authpage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login/signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignup) {
      // Signup Logic
      try {
        await axios.post(
          "https://hotel-system-cs-410309b43a2b.herokuapp.com/customers",
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          }
        );

        // Automatically log in after signup
        const loginResponse = await axios.post(
          "https://hotel-system-cs-410309b43a2b.herokuapp.com/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        const authToken = loginResponse.data.token;
        localStorage.setItem("authToken", authToken);
        alert("Signup and login successful!");
        window.location.href = "/reservations"; // Redirect to reservations page
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Signup failed. Please check your details.");
      }
    } else {
      // Login Logic
      try {
        const loginResponse = await axios.post(
          "https://hotel-system-cs-410309b43a2b.herokuapp.com/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        const authToken = loginResponse.data.token;
        localStorage.setItem("authToken", authToken);
        alert("Login successful!");
        window.location.href = "/reservations"; // Redirect to reservations page
      } catch (error) {
        console.error("Error during login:", error);
        alert("Login failed. Please check your credentials.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p>
        {isSignup ? "Already have an account? " : "Don't have an account? "}
        <button
          type="button"
          onClick={() => setIsSignup(!isSignup)}
          style={{
            textDecoration: "underline",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isSignup ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default Authpage;
