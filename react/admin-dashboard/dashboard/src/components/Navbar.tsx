import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-600 dark:bg-darkCard text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/view-users" className="hover:underline">View Users</Link>
        <Link to="/create-user" className="hover:underline">Create User</Link>
      </div>
      {isAuthenticated && <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>}
    </nav>
  );
};

export default Navbar;