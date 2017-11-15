/**
 * Kabbage Doge Client
 * Header Component
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

import React from 'react';
import './Header.styl';

const Header = () => {

  return (
    <header className="header">
      <div className="temperature-container">
        <h2 className="temperature-label">Temperature</h2>
      </div>
    </header>
  );
};

export default Header;
