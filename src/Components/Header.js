
import React from 'react';

import NavButtons from './NavButtons';
import SideButtons from './SideButtons';

const Header = ({ navButtons=[], sideButtons=[] }) => {
  return (
    <header>
      <div className="logo">
        <h3 id="logo">ButterCMS</h3>
      </div>
      <NavButtons buttons={navButtons} />
      <SideButtons buttons={sideButtons} />
    </header>
  );
};




export default Header;
