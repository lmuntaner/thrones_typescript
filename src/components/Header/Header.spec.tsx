import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

test('jest works fine', () => {
  const component = shallow(<Header title="Testing" />);
  expect(component).toMatchSnapshot();
  // expect(true).toBeTruthy();
});