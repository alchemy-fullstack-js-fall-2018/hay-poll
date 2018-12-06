import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/App.jsx';

export default function Poll({ _id, title }) {
  return (
    <>
      <p><Link to={ROUTES.POLL.linkTo(_id)}>{title}</Link></p>
    </>
  );
}
