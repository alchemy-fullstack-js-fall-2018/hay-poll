import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';

describe('Home component', () => {
  it('renders a home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
