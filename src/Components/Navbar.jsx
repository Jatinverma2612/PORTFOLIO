import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>JATIN VERMA</h1>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
