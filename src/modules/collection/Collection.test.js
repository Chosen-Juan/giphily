import React from 'react';
import { shallow } from 'enzyme';

import { Collection } from './Collection';

const removeGifSpy = jest.fn();
const defaultProps = {
  removeGifFromCollectionDispatcher: removeGifSpy,
};


describe('Collection', () => {
  it('should match snapshot', () => {
    const collection = shallow(<Collection {...defaultProps} />);
    expect(collection).toMatchSnapshot();
  });
});
