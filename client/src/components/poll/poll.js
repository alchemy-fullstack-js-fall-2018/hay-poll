import React, { Fragment } from 'react';


export default function Poll({ _id, title }) {
  return (
    <Fragment>
      <p>{_id}</p>
      <p>{title}</p>
    </Fragment>
  );
}
