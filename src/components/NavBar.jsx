import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/f1.png" alt="F1 Logo" />
        </Link>
      </div>

 
      <div className="hamburger" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className={`nav-links ${isNavVisible ? "active" : ""}`}>
        <li><Link to="/drivers" onClick={toggleNav}>Drivers</Link></li>
        <li><Link to="/circuits" onClick={toggleNav}>Circuits</Link></li>
        <li><Link to="/races" onClick={toggleNav}>Races</Link></li>
        <li><Link to="/standings" onClick={toggleNav}>Standings</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;