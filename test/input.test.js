import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../components/AddITem/Input';

it('renders correctly', () => {
  const tree = renderer.create(<Input label="abca" />).toJSON();
  expect(tree).toMatchSnapshot();
});
