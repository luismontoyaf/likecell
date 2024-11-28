import React from 'react';
import './MainHeader.css';
import logo from '../../../assets/images/logo-aux-likecell.jpeg'

const MainHeader = () => {
  return (
    <div className="main-header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default MainHeader;
