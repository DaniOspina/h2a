"use client";

import React, { useState } from 'react';
import axios from 'axios';

const GitHubUserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(response.data.items);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchUsers(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar usuarios en GitHub"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Cargando...' : 'Buscar'}
      </button>
      <div>
        {users.length === 0 ? (
          <p>No hay usuarios para mostrar</p>
        ) : (
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} width={50} height={50} />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                  {user.login}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GitHubUserList;
