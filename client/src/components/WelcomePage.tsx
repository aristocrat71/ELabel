import React from 'react';
import './WelcomePage.css';

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-root">
      {/* Header */}
      <header className="welcome-header">
        <div className="logo-section">
          <span className="logo-grape">🍇</span>
          <span className="logo-text">e-label.eu</span>
        <nav className="welcome-nav">
          <a href="#" className="nav-link">Company profile</a>
          <a href="#" className="nav-link">E-Labels</a>
        </nav>
        </div>
        <div className="header-right">
          <select className="company-profile-select" defaultValue="Canspirit">
            <option value="Canspirit">Canspirit</option>
            <option value="Other">Other</option>
          </select>
          <span className="header-icons">
            <span className="icon">Analytics</span>
            <span className="icon">Settings</span>
            <a href="/login" className="icon" style={{marginLeft: '16px'}}>Logout</a>
          </span>
        </div>
      </header>

      <main className="welcome-main">
        <h1 className="welcome-title">Welcome</h1>
        <section className="elabels-section">
          <h2>E-labels and collective QR codes</h2>
          <div className="elabels-cards">
            <button type="button" className="elabel-card elabel-action">
              <div className="elabel-icon">🍷</div>
              <div className="elabel-title">Create your first E-Label</div>
            </button>
            <button type="button" className="elabel-card">
              <div className="elabel-icon">🗒️</div>
              <div className="elabel-number">0</div>
              <div className="elabel-desc">No. of collective QR codes</div>
            </button>
            <button type="button" className="elabel-card elabel-upgrade">
              <div className="elabel-icon">⬆️</div>
              <div className="elabel-title">Upgrade</div>
              <div className="elabel-desc">Need more E-Labels?</div>
            </button>
          </div>
        </section>

        <section className="support-section">
          <h2>Support</h2>
          <div className="support-cards">
            <div className="support-card support-feedback">
              <textarea className="support-textarea" placeholder="Do you have any questions? Or would you like to share your feedback, ideas and wishes with us?"></textarea>
              <button className="support-send-btn">Send</button>
            </div>
            <div className="support-card support-assist">
              <div className="support-assist-img">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Support" />
              </div>
              <div className="support-assist-title">Do you need assistance?</div>
              <button className="support-assist-btn">Book a free intro</button>
            </div>
            <div className="support-card support-video">
              <button type="button" className="support-video-btn">
                <div className="support-video-icon">▶️</div>
                <div className="support-video-title">Video Tutorials & Webinars</div>
                <div className="support-video-desc">Here you will find instructions on how to use the IMERO Studio optimally.</div>
              </button>
            </div>
            <div className="support-card support-recommend">
              <button type="button" className="support-recommend-btn">
                <div className="support-recommend-icon">📢</div>
                <div className="support-recommend-title">Recommend us to others</div>
                <div className="support-recommend-desc">For every friend you refer, you will receive €50 credit and your friend will receive €20.</div>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WelcomePage; 