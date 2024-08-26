"use client";

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './GitHubUsers.module.css'; 

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

const GitHubUsers = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
    const data = await response.json();
    setUsers(data.items);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchUsers();
    }
  };

  return (
    <div className="container mt-5 pt-5">
        <p className="lead">Desafío 4: Next.js y TypeScript</p>
      <h1 className={`${styles.heading} text-center`}>En esta sección puedes buscar los usuarios de Github e ir a su perfil</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar usuarios en GitHub"
        />
        <button className="btn btn-primary" onClick={fetchUsers}>Buscar</button>
      </div>
      <ul className="list-group">
        {users?.map(user => (
          <li key={user.login} className="list-group-item d-flex align-items-center">
            <img 
              src={user.avatar_url} 
              alt={user.login} 
              className="rounded-circle me-3" 
              width={50} 
              height={50} 
            />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUsers;
