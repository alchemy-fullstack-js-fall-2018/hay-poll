import React from 'react';
import CreatePoll from './CreatePoll';
import { shallow } from 'enzyme';

describe('CreatePoll component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<CreatePoll />);
    expect(wrapper).toMatchSnapshot();
  })
})
