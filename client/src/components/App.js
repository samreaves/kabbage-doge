/**
 * Kabbage Doge Client
 * App Component
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import BreedsList from "./BreedsList/BreedsList";
import './App.styl';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <BreedsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
