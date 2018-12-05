import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {
  it('renders a header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  })
})