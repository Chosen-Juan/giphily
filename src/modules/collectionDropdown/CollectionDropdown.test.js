import React from 'react';
import { shallow } from 'enzyme';

import { CollectionDropdown } from './CollectionDropdown';

describe('CollectionDropdown', () => {
  it('should match snapshot', () => {
    const collectionDropdown = shallow(<CollectionDropdown />);
    expect(collectionDropdown).toMatchSnapshot();
  });
});
