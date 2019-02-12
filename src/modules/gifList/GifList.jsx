import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gif from './Gif';
import './styles.scss';

export class GifList extends Component {

  constructor(props) {
    super(props);
    this.renderGifs = this.renderGifs.bind(this);
  }

  renderGifs() {
    return this.props.gifList.map(i => {
      return <Gif gif={i} key={i.id} />;
    });
  }

  render() {
    return (
      <div className='gif-container'>
        {this.renderGifs()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  gifList: state.searchReducer.items
});

export default connect(mapStateToProps)(GifList);
