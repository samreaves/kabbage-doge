/**
 * Kabbage Doge Client
 * Spinner Component JSX
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

import React from 'react';
import './Spinner.styl';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div></div>
      </div>
    </div>
  );
};

export { Spinner };
