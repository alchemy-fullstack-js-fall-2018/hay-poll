import React from 'react';
import Poll from './Poll';
import { shallow } from 'enzyme';

describe('Poll component', () => {
  it('renders a Poll component', () => {

    const choices = ['GOT', 'Seinfeld', 'The Simpsons'];
    const wrapper = shallow(<Poll title='Best Show Ever' choices={choices} />);
    expect(wrapper).toMatchSnapshot();
  });
});
