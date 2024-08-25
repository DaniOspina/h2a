"use client";

import { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
  };

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Añadir nuevo usuario"
      />
      <button onClick={addUser}>Añadir Usuario</button>
    </div>
  );
};

export default UserList;
