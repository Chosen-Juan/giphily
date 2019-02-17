import React from 'react';
import { shallow } from 'enzyme';

import { Collection } from './Collection';

const spy = jest.fn();
const defaultProps = {
  removeGifFromCollectionDispatcher: spy,
  createCollectionDispatcher: spy,
  activeCollectionIndex: 0,
  collections: [{
    id: 'abc-123',
    name: 'Default',
    items: []
  }]
};


describe('Collection', () => {
  it('should match snapshot', () => {
    const collection = shallow(<Collection {...defaultProps} />);
    expect(collection).toMatchSnapshot();
  });
});
