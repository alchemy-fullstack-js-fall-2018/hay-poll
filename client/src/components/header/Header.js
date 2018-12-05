import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function Header() {
  return (
    <header>
      <div>
        <h3>ITS A VOTING APP</h3>
      </div>
      <div>
        <Link to={ROUTES.HOME.linkTo('/home')}>Home</Link>
      </div>
    </header>
  );
}
