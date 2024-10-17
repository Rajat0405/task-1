import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const SideButtons = ({ buttons, sidebtn }) => {
  const paths = ['/seedemo', '/getstarted'];

  return (
    <div className={classNames("nav", { "middlebtn": sidebtn })}>
      {buttons.map((name, index) => (
        <NavLink 
          key={index} 
          to={paths[index]} 
          className={({ isActive }) => classNames("side-btn", { "middle-btn": index === 2 })} 
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default SideButtons;
