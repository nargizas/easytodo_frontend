import React from 'react';
import renderer from 'react-test-renderer';

import ToDoItemForm from '../components/AddITem/ToDoItemForm';

it('renders correctly', () => {
  const tree = renderer.create(<ToDoItemForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
