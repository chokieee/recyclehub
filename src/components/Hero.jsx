import React from 'react';
import illustration from '../assets/recycle_illustration.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Waste Management &amp; Recycling Platform
        </h1>
        <p className="hero-subtitle">
          A comprehensive solution for efficient waste disposal 
          and sustainable recycling.
        </p>
        <a href="#get-started" className="primary-button">
          Get Started
        </a>
      </div>
      <div className="hero-image-container">
        <img 
          src={illustration} 
          alt="User standing next to a large recycling bin"
        />
      </div>
    </section>
  );
};

export default Hero;
