import React from 'react';
import { shallow } from 'enzyme';

import { EditCollection } from './EditCollection';

const spy = jest.fn();
const defaultProps = {
  switchCollectionDispatcher: spy,
  activeCollectionIndex: 0,
  closeCallback: spy,
  deleteCollectionDispatcher: spy,
  renameCollectionDispatcher: spy,
  collections: [{
    id: 'abc-123',
    name: 'Default',
    items: []
  }]
};

describe('EditCollection', () => {
  it('should match snapshot', () => {
    const editCollection = shallow(<EditCollection {...defaultProps} />);
    expect(editCollection).toMatchSnapshot();
  });
});
