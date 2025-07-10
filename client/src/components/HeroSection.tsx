import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        The fastest and safest way to the EU E-Label for wine.
      </h1>
      <p className="hero-description">
        Developed with legal experts. Create E-Labels for your wines in just a few minutes, without prior knowledge and at fair prices.
      </p>
      <button className="hero-cta" onClick={() => navigate('/register')}>Try it now for free</button>
      <p className="hero-subtext">
        Register for now and get 3 free e-labels.
      </p>
    </section>
  );
};

export default HeroSection; 