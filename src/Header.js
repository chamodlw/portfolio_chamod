import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faCode, faCog, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import './css/Header.css'; // Import the CSS file
import Typewriter from 'typewriter-effect';

const Header = () => {
  
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handlePasswordInputChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleLoginClick = () => {
    if (passwordInput === '12345') {
      setPassword('12345');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleLogoutClick = () => {
    setPassword('');
    setPasswordInput(''); // Clear the input field as well
    navigate('/'); // Use navigate to redirect
    setSettingsOpen(!settingsOpen);

  };

  return (
    <nav className={`navbar ${settingsOpen ? 'settings-open' : ''}`}>
      <h1 className="logo">
        <Typewriter
          options={{
            strings: ['Weerasinghe C.L.'],
            autoStart: true,
            deleteSpeed: Infinity, // Set delete speed to Infinity to prevent deleting
            cursor: '', // Remove the cursor
          }}
        />
      </h1>
      <div className="nav-links">
        <NavLink to="/" className="nav-link" end>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '3px' }} />
          Home
        </NavLink>
        <NavLink to="/skills" className="nav-link">
          <FontAwesomeIcon icon={faCode} style={{ marginRight: '3px' }} />
          Skills
        </NavLink>
        <NavLink to="/services" className="nav-link">
          <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '3px' }} />
          Services
        </NavLink>
        <NavLink to="/blog" className="nav-link">
          <FontAwesomeIcon icon={faBlog} style={{ marginRight: '3px' }} />
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '3px' }} />
          Contact
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '3px' }} />
          About
        </NavLink>
        <NavLink to="/settings" className="nav-link" onClick={handleSettingsClick}>
          <FontAwesomeIcon icon={faCog} style={{ marginLeft: '30px', marginRight: '35px' }} />
        </NavLink>
      </div>

      <div className={`settings-panel ${settingsOpen ? 'show' : ''}`}>
        <Grid>
          {password === '12345' ? (
            <Grid>
              <h1 style={{ marginLeft: '5%', textAlign: 'left' }}>ADMIN Section</h1>
              <button style={{ marginLeft: '5%' }} onClick={handleLogoutClick}>Logout</button>
            </Grid>
          ) : (
            <>
              <h1 style={{ marginLeft: '5%', textAlign: 'left' }}>Switch Mode</h1>
              <Grid style={{ marginLeft: '5%' }}>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={handlePasswordInputChange}
                />
                <button onClick={handleLoginClick} style={{ marginTop: '5%' }}>Login</button>
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </nav>
  );
};

export default Header;
