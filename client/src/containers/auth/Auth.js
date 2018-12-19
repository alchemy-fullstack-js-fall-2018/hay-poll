import { connect } from 'react-redux';
import { signup, login } from '../../actions/session';
import { getSession } from '../../selectors/session';
import { AuthForm } from '../../components/auth/Auth';

export const Signup = connect(
  state => ({
    typeText: 'Signup',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(signup({ email, password }))
  })
)(AuthForm);

export const Login = connect(
  state => ({
    typeText: 'Login',
    session: getSession(state)
  }),
  dispatch => ({
    onSubmit: ({ email, password }) => dispatch(login({ email, password }))
  })
)(AuthForm);
