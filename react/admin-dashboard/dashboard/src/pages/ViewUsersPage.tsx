import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';

const ViewUsersPage: React.FC = () => {
  const { users, getUsers, deleteUserById } = useUser();

  useEffect(() => {
    getUsers(1, 10);
  }, [getUsers]);

  const handleDelete = async (id: string) => {
    await deleteUserById(id);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsersPage;
