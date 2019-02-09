import React, { Component } from 'react';
import 'bulma';

import Search from './modules/search/Search';
import GifList from './modules/gifList/GifList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giphily</h1>
        <Search />
        <GifList />
      </div>
    );
  }
}

export default App;
