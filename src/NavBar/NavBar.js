import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/navImage.png';
import './NavBar.css';

const NavBar = () => {
  const [menu, setMenu] = useState("HomePage");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  }

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>

      <div className={`right ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => { setMenu("HomePage"); setIsMenuOpen(false); }}>
            <Link to="/" className={`nav-link ${menu === "HomePage" ? "active" : ""}`}>Homepage</Link>
          </li>
          <li onClick={() => { setMenu("Registration"); setIsMenuOpen(false); }}>
            <Link to="/Register" className={`nav-link ${menu === "Registration" ? "active" : ""}`}>Registration</Link>
          </li>
          <li onClick={() => { setMenu("Fetch"); setIsMenuOpen(false); }}>
            <Link to="/fetch" className={`nav-link ${menu === "Fetch" ? "active" : ""}`}>Fetch</Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
