import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faCode, faEnvelope, faHome, faUniversity} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom'; // Import useNavigate
import './css/Header.css'; // Import the CSS file
import Typewriter from 'typewriter-effect';

const Header = () => {

  const GitHub = () => {
    window.open('https://github.com/chamodlw', '_blank');
  }

  return (
    <nav className={`navbar`}>
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
        <NavLink to="/projects" className="nav-link">
          <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '3px' }} />
          Projects
        </NavLink>
        <NavLink to="/blog" className="nav-link">
          <FontAwesomeIcon icon={faBlog} style={{ marginRight: '3px' }} />
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '3px' }} />
          Contact
        </NavLink>
        <NavLink to="/education" className="nav-link">
          <FontAwesomeIcon icon={faUniversity} style={{ marginRight: '3px' }} />
          Education
        </NavLink>
        <NavLink className="nav-link" onClick={GitHub}>
          <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '30px', marginRight: '35px' , fontSize: '130%'}} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
