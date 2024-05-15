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
            dob: userData.dob || '',
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">Edit User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">First Name</label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">Last Name</label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">Date of Birth</label>
          <input
            type="date"
            value={user.dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;