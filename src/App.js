import React, { Component } from 'react';

import Search from './components/Search';

import './App.css';
import 'bulma';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giphily</h1>
        <Search />
      </div>
    );
  }
}

export default App;
