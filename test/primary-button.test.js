import React from 'react';
import renderer from 'react-test-renderer';

import PrimaryButton from '../components/PrimaryButton';

it('renders correctly', () => {
  const tree = renderer.create(<PrimaryButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
