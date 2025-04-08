import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://dashboard.codeparrot.ai/api/image/Z_UTAoDi91IKZZsP/union.png" alt="logo-icon" className="logo-icon" />
        <span className="logo-text">photo</span>
      </div>
      
      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/campaigns" className="nav-link">campaigns</a>
        <a href="/about" className="nav-link">about</a>
        <a href="/contact" className="nav-link">contact</a>
      </nav>

      <div className="header-actions">
        <button className="donate-btn">
          <img src="https://dashboard.codeparrot.ai/api/image/Z_UTAoDi91IKZZsP/circle-u.png" alt="user" className="btn-icon" />
          <span>Donate Now</span>
        </button>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_UTAoDi91IKZZsP/circle-u-2.png" alt="user" className="user-icon" />
        <div className="user-circle"></div>
      </div>
    </header>
  );
};

export default Header;

