import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AllPolls from './AllPolls';

jest.mock('../../routes/routes.js', () => ({
  ROUTES: {
    POLL_DETAIL: {
      linkTo: () => '/'
    }
  }
}));



describe('AllPolls component', () => {
  it('renders a component', () => {
    const polls = [{ _id: 1, issue: 'What is your favorite TV Show?', options: ['GOT', 'Sopranos', 'Halt and Catch Fire'] }];
    const fetchPolls = jest.fn();
    const wrapper = shallow(
      <MemoryRouter>
        <AllPolls polls={polls} fetchPolls={fetchPolls} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
