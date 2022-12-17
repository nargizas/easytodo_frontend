import React from 'react';
import renderer from 'react-test-renderer';
import AddFloatingButton from '../components/AddFloatingButton';

it('renders correctly', () => {
  const tree = renderer.create(<AddFloatingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
