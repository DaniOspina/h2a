import React from 'react';
import Link from "next/link";
import UserList from "./components/UserList";
import sumEvenNumbers from "./utils/sumNum";
import GitHubUserList from './components/GitHubUserList';

const Home = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = sumEvenNumbers(numbers);
  return (
    <div>
      <header>
        <h1>Mi Página Web</h1>
      </header>
      <main>
        <p>Bienvenido a mi página web.</p>
        <p>La lista de los números es: {numbers}</p>
        <p>La suma de los números pares es: {sum}</p>
        <UserList />
        <GitHubUserList />
      </main>
      <footer>
        <p>© 2024 Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default Home;
