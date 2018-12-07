import React from 'react';
import { rootLinks } from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Al&#39;s House of Polls</h1>
      <nav className={styles.nav}>
        {rootLinks()}
      </nav>
    </header>
  );
}
