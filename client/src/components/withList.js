import React, { Fragment } from 'react';

export default function withList(Component, options = {}) {
  const { spread = true, itemKey = 'item' } = options;

  return function WithListComponent({ list }) {
    const items = list.map((item, i) => {
      if(spread) {
        return <Component key={i} {...item} />;
      } else {
        const props = { [itemKey]: item };
        return <Component key={i} {...props} />;
      }

    });

    return (
      <Fragment>
        {items}
      </Fragment>
    );
  };
}
