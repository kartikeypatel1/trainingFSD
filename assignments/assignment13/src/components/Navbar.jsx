import React from "react";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">🍴 FoodieHub</h1>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Order Button */}
      <button className="order-btn">Order Now</button>
    </nav>
  );
};

export default Navbar;
