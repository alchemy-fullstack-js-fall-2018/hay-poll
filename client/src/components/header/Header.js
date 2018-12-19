import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={ROUTES.LOGIN.linkTo()}>Log In</Link>
        <Link to={ROUTES.SIGNUP.linkTo()}>Sign Up</Link>
        <Link to={ROUTES.POLLS.linkTo()}>Polls</Link>
        <Link to={ROUTES.HOME.linkTo()}>Home</Link>
      </nav>
    </header>
  );
}
