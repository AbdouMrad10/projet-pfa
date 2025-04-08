import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/campaigns" className="nav-link">Campaigns</a>
          <div className="logo">
            <img src="https://dashboard.codeparrot.ai/api/image/Z_UTAoDi91IKZZsP/union-4.png" alt="logo" className="logo-img" />
            <span className="logo-text">photo</span>
          </div>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
        <div className="divider"></div>
        <div className="copyright">
          PFA 2025 © all rights reserved
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  // Add any default props if needed
};

export default Footer;

