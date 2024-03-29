import React from 'react';
import { shallow } from 'enzyme';

import { CollectionDropdown } from './CollectionDropdown';

const spy = jest.fn();
const defaultProps = {
  switchCollectionDispatcher: spy,
  activeCollectionIndex: 0,
  collections: [{
    id: 'abc-123',
    name: 'Default',
    items: []
  }]
};

describe('CollectionDropdown', () => {
  it('should match snapshot', () => {
    const collectionDropdown = shallow(<CollectionDropdown {...defaultProps} />);
    expect(collectionDropdown).toMatchSnapshot();
  });
});
