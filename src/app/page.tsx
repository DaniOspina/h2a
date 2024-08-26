import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import sumEvenNumbers from './utils/sumNum';
import Link from 'next/link';
import styles from './page.module.css';

const Home = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = sumEvenNumbers(numbers);

  return (
    <div className={`${styles.content}`}>
      <h1 className={`${styles.head} text-center`}>Desafíos</h1>
      <main>
        <div className="mb-4">
          <p className="lead">Desafío 2: Javascript</p>
          <p className="fw-bold">La lista de los números es: {numbers.join(', ')}</p>
          <p className="fw-bold">La suma de los números pares es: {sum}</p>
        </div>
        <p className="lead">Desafío 3: React</p>
        <UserList />
        <Link href="/github-users">Ver Usuarios de GitHub</Link>
      </main>
    </div>
  );
};

export default Home;
