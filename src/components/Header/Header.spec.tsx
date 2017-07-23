import { shallow } from 'enzyme';
import React from 'react';

import Header from './index';

test('jest works fine', () => {
  const component = shallow(<Header title="Testing" />);
  expect(component).toMatchSnapshot();
});
