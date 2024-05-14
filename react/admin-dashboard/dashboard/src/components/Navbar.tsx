import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav>
      <Link to="/view-users">View Users</Link>
      <Link to="/create-user">Create User</Link>
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
