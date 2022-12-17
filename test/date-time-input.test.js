import React from 'react';
import renderer from 'react-test-renderer';

import DateTimeInput from '../components/AddITem/DateTimeInput';

it('renders correctly', () => {
  const tree = renderer.create(<DateTimeInput date={new Date(167124561000)} />).toJSON();
  expect(tree).toMatchSnapshot();
});
