import React from 'react';
import { shallow } from 'enzyme';

import { Gif } from './Gif';

const image = {
  url: '://fakegif.gif'
};
const defaultProps = {
  gif: {
    title: 'Fake gify',
    id: 'abc',
    images: {
      original: image,
      original_still: image
    }
  }
};

describe('Gif', () => {
  it('should render a loading img tag', () => {
    const gif = shallow(<Gif {...defaultProps} />);
    const image = gif.find('img');
    expect(image.exists()).toBeTruthy();
    expect(image.props().alt).toBe(defaultProps.gif.title);
  });
});