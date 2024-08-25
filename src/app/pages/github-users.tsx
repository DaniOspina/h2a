import React from 'react';
import { useState } from 'react';

interface GitHubUser {
  login: string;
  avatar_url: string;
}

const GitHubUsers = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
    const data = await response.json();
    setUsers(data.items);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar usuarios en GitHub"
      />
      <button onClick={fetchUsers}>Buscar</button>
      <ul>
        {users.map(user => (
          <li key={user.login}>
            <img src={user.avatar_url} alt={user.login} width={50} height={50} />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUsers;
