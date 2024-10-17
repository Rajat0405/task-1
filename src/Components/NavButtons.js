import React from 'react';
import { NavLink } from 'react-router-dom';

const NavButtons = ({ buttons=[] }) => {
  
  const paths = [
    '/solution',
    '/features',
    '/learn',
    '/marketplace',
    '/pricing',
    '/customers',
    '/partner',
    '/login'
  ];

  return (
    <nav className='nav'>
      {buttons.map((name, index) => (
        <NavLink 
          key={index} 
          to={paths[index]} 
          className="nav-btn"
          activeClassName="active" 
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavButtons;
