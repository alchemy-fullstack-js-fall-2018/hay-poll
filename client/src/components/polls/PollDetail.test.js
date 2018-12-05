import React from 'react';
import PollDetail from './PollDetail';
import { shallow } from 'enzyme';

describe('Poll component', () => {
  it('renders a Poll component', () => {
    const poll = {
      title: 'Best Show of All Time',
      options: ['GOT', 'Seinfeld', 'The Simpsons']
    };
    const submitVote = jest.fn();

    const wrapper = shallow(<PollDetail poll={poll} submitVote={submitVote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
