"use client";

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
  const [newUserName, setNewUserName] = useState('');

  const addUser = () => {
    if (newUserName.trim()) {
      const newUser = {
        id: users.length + 1,
        name: newUserName,
      };
      setUsers([...users, newUser]);
      setNewUserName('');
    }
  };

  return (
    <div className="container my-4">
      <h2>Lista de Usuarios</h2>
      <ul className="list-group mb-3">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name}
          </li>
        ))}
      </ul>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Añadir nuevo usuario"
        />
        <button
          className="btn btn-primary ms-2"
          onClick={addUser}
        >
          Añadir Usuario
        </button>
      </div>
    </div>
  );
};

export default UserList;
