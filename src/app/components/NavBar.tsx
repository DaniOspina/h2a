"use client";

import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/github-users">Usuarios de GitHub</Link>
        </li>
        <li>
          <Link href="/pages/about.tsx">Acerca de</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
