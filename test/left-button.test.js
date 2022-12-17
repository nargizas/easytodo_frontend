import React from 'react';
import renderer from 'react-test-renderer';

import LeftButton from '../components/LeftButton';

it('renders correctly', () => {
  const tree = renderer.create(<LeftButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
