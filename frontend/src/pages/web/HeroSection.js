import React from 'react';
import './HeroSection.css';

const HeroSection = ({ style = {} }) => {
  return (
    <div className="hero-section" style={style}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>We'd Love To Here From You</h1>
      </div>
    </div>
  );
};

export default HeroSection;
