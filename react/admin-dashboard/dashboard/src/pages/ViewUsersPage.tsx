import React, { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { User } from '../types/User';

const ViewUsersPage: React.FC = () => {
  const { users, getUsers, deleteUserById } = useUser();
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);
  const [sortKey, setSortKey] = useState<'firstName' | 'email'>('firstName');

  useEffect(() => {
    getUsers(1, 10); 
  }, [getUsers]);

  useEffect(() => {
    const sorted = [...users].sort((a, b) => {
      if (sortKey === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.email.localeCompare(b.email);
    });
    setSortedUsers(sorted);
  }, [users, sortKey]);

  const handleDelete = async (id: string) => {
    await deleteUserById(id);
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        <label>Sort By: </label>
        <select onChange={(e) => setSortKey(e.target.value as 'firstName' | 'email')}>
          <option value="firstName">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ViewUsersPage;
