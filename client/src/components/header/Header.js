import React from 'react';
import { rootLinks } from '../../routes/routes';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>{rootLinks()}</nav>
    </div>
  );
}
