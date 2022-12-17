import React from 'react';
import renderer from 'react-test-renderer';

import IconButton from '../components/IconButton';

it('renders correctly', () => {
  const tree = renderer.create(<IconButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
