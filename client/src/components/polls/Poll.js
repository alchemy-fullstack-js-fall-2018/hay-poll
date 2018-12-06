import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Poll({ _id, title }) {
  return (
    <>
      <p><Link to={ROUTES.POLL.linkTo(_id)}></Link>{title}</p>
    </>
  );
}
