import React from 'react';
import './Header.css';
import grapeLogo from '../assets/grapelogo.webp'; // Place your grape logo SVG in assets
import ukFlag from '../assets/flag.svg'; // Place your UK flag SVG in assets
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <img src={grapeLogo} alt="Grape logo" className="header__logo-img" />
        </div>
        <ul className="header__menu">
          <li><a href="#advantages">Advantages</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#for-partners">For partners</a></li>
          <li><a href="#webinars">Our webinars</a></li>
          <li><a href="#knowledge-base">Knowledge Base</a></li>
        </ul>
        <div className="header__actions">
          <button className="header__callback">Arrange a callback</button>
          <button className="header__signup" onClick={() => navigate('/register')}>Sign up for free</button>
          <button className="header__signin" onClick={() => navigate('/login')}>Sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 