import React, { Component } from 'react';
import 'bulma';

import Search from './modules/search/Search';
import GifList from './modules/gifList/GifList';
import Collection from './modules/collection/Collection';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <section className='search'>
          <h1 className='app-title'>Giphily</h1>
          <Search />
        </section>
        <GifList />
        <div className='collection-fix'></div>
        <Collection />
      </div>
    );
  }
}

export default App;
