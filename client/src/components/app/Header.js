import React from 'react';
import { rootLinks } from '../../routes';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {rootLinks()}
      </nav>
    </header>
  );
}
