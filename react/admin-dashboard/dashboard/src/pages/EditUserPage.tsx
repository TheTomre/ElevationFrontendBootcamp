import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getUserById, updateUser } = useUser();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const userData = await getUserById(id);
        if (userData) {
          setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: '',
            dob: userData.dob,
          });
        }
      }
    };
    fetchUser();
  }, [id, getUserById]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      const result = await updateUser(id, user);
      if (!result) {
        setError('Failed to update user');
      }
    } else {
      setError('User ID is undefined');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
        />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUserPage;
