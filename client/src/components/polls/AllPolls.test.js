import React from 'react';
import { shallow } from 'enzyme';
import AllPolls from './AllPolls';

describe('AllPolls component', () => {
  it('renders a component', () => {
    const polls = [{ issue: 'What is your favorite TV Show?', options: ['GOT', 'Sopranos', 'Halt and Catch Fire'] }];
    const wrapper = shallow(<AllPolls polls={polls} />);
    expect(wrapper).toMatchSnapshot();
  });
});
