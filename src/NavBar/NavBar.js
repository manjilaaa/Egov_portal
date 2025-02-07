import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/navImage.png';
import './NavBar.css';
import HomePage from '../components/HomePage/HomePage';

const NavBar = () => {
  const [menu, setMenu] = useState("HomePage");

  return (
    <div className='navbar'>
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      <div className="right">
        <ul>
          <li onClick={()=>setMenu("HomePage")}>
            <Link to="/" className={`nav-link ${menu === "HomePage" ? "active" : ""}`}>Homepage</Link>
            </li>
          <li onClick={() => setMenu("Registration")}>
            <Link to="/Register" className={`nav-link ${menu === "Registration" ? "active" : ""}`}>Registration</Link>
          </li>
          <li onClick={() => setMenu("Fetch")}>
            <Link to="/fetch" className={`nav-link ${menu === "Fetch" ? "active" : ""}`}>Fetch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
