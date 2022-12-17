import React from 'react';
import renderer from 'react-test-renderer';

import RightButton from '../components/RightButton';

it('renders correctly', () => {
  const tree = renderer.create(<RightButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
