import React from 'react';
import { rootLinks } from '../../routes/routes';

export default function Header() {
  return (
    <header>
      <nav>
        {rootLinks()}
      </nav>
    </header>
  );
}
