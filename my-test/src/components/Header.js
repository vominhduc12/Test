// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Sẽ tạo file CSS này sau

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">H</div>
      <button className="header-buy-button">BUY NOW</button>
    </header>
  );
};

export default Header;