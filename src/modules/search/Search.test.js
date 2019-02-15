import React from 'react';
import { shallow } from 'enzyme';

import { Search } from './Search';

const fetchGifsSpy = jest.fn();
const defaultProps = {
  fetchGifs: fetchGifsSpy
};

describe('Search', () => {
  let search;

  beforeEach(() => {
    search = shallow(<Search {...defaultProps} />);
  });

  it('should match snapshot', () => {
    expect(search).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const mockedEvent = { target: { value: 'mock' } }
    const div = search.find('.input');
    div.simulate('change', mockedEvent);
    expect(fetchGifsSpy).toHaveBeenCalledWith(mockedEvent.target.value);
  });

});
