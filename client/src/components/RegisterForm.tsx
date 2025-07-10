import React from 'react';
import './RegisterForm.css';
import grapeLogo from '../assets/registrationlogo.webp';
import { useNavigate } from 'react-router-dom';


const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      navigate('/welcome');
    };
  return (
    <div className="register-form-container">
      <div className="register-form-logo-block">
        <img src={grapeLogo} alt="e-label.eu logo" className="register-form-logo" />
        <div className="register-form-brand">e-label.eu</div>
        <div className="register-form-byline">by INEVO</div>
      </div>
      <h2 className="register-form-heading">Register and create 3 e-labels for free</h2>
      <form className="register-form-fields" onSubmit={handleSubmit}>
        <label className="register-form-label">
          <span className="register-form-label-text">E-Mail</span>
          <input type="email" className="register-form-input" placeholder="E-Mail" required />
        </label>
        <label className="register-form-label">
          <span className="register-form-label-text">Password</span>
          <input type="password" className="register-form-input" placeholder="Password" required />
          <div className="register-form-password-hints">
            <div>At least 1 lower case letter</div>
            <div>At least 1 upper case letter</div>
            <div>At least 1 digit</div>
            <div>At least 8 characters</div>
          </div>
        </label>
        <div className="register-form-terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            You agree to our <a href="#">Terms and Conditions</a> as well as the <a href="#">Data Processing Agreement</a> and take note of the <a href="#">Privacy Policy</a>.
          </label>
        </div>
        <button type="submit" className="register-form-submit">Register</button>
      </form>
      <button className="register-form-back" onClick={() => navigate('/')}>
  &larr; Back
</button>

    </div>
  );
};

export default RegisterForm; 