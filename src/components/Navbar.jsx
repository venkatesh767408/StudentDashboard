import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
  <li><Link to="/home">Home</Link></li>     {/* ✅ /home, not / */}
  <li><Link to="/profile">Profile</Link></li>
  <li><Link to="/courses">Courses</Link></li>
  <li><Link to="/feedback">Feedback</Link></li>
  <li><Link to="/">Login</Link></li>         {/* ✅ login is root / */}
</ul>

    </nav>
  );
};

export default Navbar;
