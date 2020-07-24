import React, {useState} from 'react';
import '../index.css'

const Questions = () => {
  return (
    <div className="header_wrapper">
      <img className="header_logo" src="/images/deptLogoBlack.png"/>
      <div className="header_menu_wrapper">
        <div className="heade_menu">MENU</div>
        <svg viewBox="0 0 100 80" width="40" height="40" className ="header_hamburger">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </div>
  );
}

export default Questions;