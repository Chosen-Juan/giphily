import React from 'react';
import { shallow } from 'enzyme';

import { GifList } from './GifList';

const addGifSpy = jest.fn();
const image = {
  url: '://fakegif.gif'
};
const defaultProps = {
  addGifToCollectionDispatcher: addGifSpy,
  gifList: [{
    title: 'Fake gify',
    id: 'abc',
    images: {
      original: image,
      original_still: image
    }
  }]
};


describe('GifList', () => {
  let gifList;

  beforeEach(() => {
    gifList = shallow(<GifList {...defaultProps} />);
  });

  it('should match snapshot', () => {
    expect(gifList).toMatchSnapshot();
  });

  it('should call onClick with the gif info', () => {
    const div = gifList.find('.gif-button');
    div.simulate('click');
    expect(addGifSpy).toBeCalledWith(defaultProps.gifList[0]);
  });

});
