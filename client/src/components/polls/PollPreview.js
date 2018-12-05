import React from 'react'

export default function PollPreview({ title, options }) {
  const optionList = options.map((option, i) => {
    return <li key={i}>{option}</li>;
  });

  return (
    <div>
      <h1>{title}</h1>
      <ul>{optionList}</ul>
    </div>
  );
}
