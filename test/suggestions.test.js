import React from 'react';
import renderer from 'react-test-renderer';
import SuggestionsScreen from '../screens/SuggestionsScreen';

test('renders correctly', () => {
  const tree = renderer.create(<SuggestionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
