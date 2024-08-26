"use client";

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">Mi Sitio Web</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/github-users" className="nav-link text-decoration-underline">
                Usuarios de GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
