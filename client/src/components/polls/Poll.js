import React from 'react';
import ROUTES from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Poll({ poll }) {
  return (
    <Link to={ROUTES.POLL_DETAIL.linkTo(poll._id)}>
      {poll.title}
    </Link>
  );
}
