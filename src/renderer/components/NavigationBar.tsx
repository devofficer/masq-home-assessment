import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();

  const isActive = (path:string) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <ul>
        <li  >
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/weather" className={isActive('/weather') ? 'active' : ''}>Weather</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
