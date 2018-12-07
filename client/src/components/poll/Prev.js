import React from 'react';

export default function Prev({ title, choices }) {
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
