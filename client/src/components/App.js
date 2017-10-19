/**
 * Kabbage Doge Client
 * App Component
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home';
import './App.styl';

class App extends Component {

  render() {
    return (
        <Home />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
