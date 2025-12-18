import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showUserMenu = false, userName = "John" }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-icon" style={{ textDecoration: 'none' }}>
          <span className="logo-icon">♻️</span>
          <span>Recycle Hub</span>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/schedules" className="nav-link">Schedules</Link>
        <Link to="/rewards" className="nav-link">Rewards</Link>
        <Link to="/map" className="nav-link">Map</Link>
        <Link to="/analysis" className="nav-link">Analysis</Link>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
        {showUserMenu ? (
          <Link to="/profile" className="nav-link" style={{ fontWeight: 700 }}>
            {userName} &#x25BE;
          </Link>
        ) : (
          <button className="primary-button">Sign up</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
