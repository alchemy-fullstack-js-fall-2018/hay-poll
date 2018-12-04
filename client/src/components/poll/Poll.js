import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Poll = ({ title, candidates }) => {
  const candidatesItem = candidates.map(candidate => {
    return <li key={candidate._id}>{candidate.name}</li>;
  });

  return (
    <Fragment>
      {title}
      <ul>
        {candidatesItem}
      </ul>
    </Fragment>
  );
};

Poll.propTypes = {
  title: PropTypes.string.isRequired,
  candidates: PropTypes.array.isRequired
};

export default Poll;
