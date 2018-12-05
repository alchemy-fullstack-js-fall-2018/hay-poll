import React from 'react';
import PropTypes from 'prop-types';

export default function Poll({ title, choices }) {
  const choiceList = choices.map((choice, i) => {
    return <li key={i}>{choice}</li>;
  });
  return (
    <div>
      <h1>{title}</h1>
      <ul>{choiceList}</ul>
    </div>
  );
}

Poll.propTypes = {
  title: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired
};
