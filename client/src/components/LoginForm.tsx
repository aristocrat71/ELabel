import React from 'react';
import './LoginForm.css';
import grapeLogo from '../assets/grapelogo.webp';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/welcome');
  };

  return (
    <div className="login-form-container">
      <div className="login-form-logo-block">
        <img src={grapeLogo} alt="e-label.eu logo" className="login-form-logo" />
        <div className="login-form-brand">e-label.eu</div>
        <div className="login-form-byline">by INEVO</div>
      </div>
      <h2 className="login-form-heading">Login</h2>
      <form className="login-form-fields" onSubmit={handleSubmit}>
        <label className="login-form-label">
          <input type="email" className="login-form-input" placeholder="E-Mail" />
        </label>
        <label className="login-form-label">
          <input type="password" className="login-form-input" placeholder="Password" defaultValue="password" required />
        </label>
        <button type="submit" className="login-form-submit">Login with Mail</button>
      </form>
      <div className="login-form-links">
        <button className="login-form-link" onClick={() => navigate('/register')}>Register</button>
        <button className="login-form-link" onClick={() => {}}>Forgot password?</button>
      </div>
      <button className="login-form-back" onClick={() => navigate('/')}>← Back to the start page</button>
    </div>
  );
};

export default LoginForm; 