import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-600 dark:bg-darkCard text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/view-users" className="hover:underline">{t('navbar.viewUsers')}</Link>
        <Link to="/create-user" className="hover:underline">{t('navbar.createUser')}</Link>
      </div>
      {isAuthenticated && (
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          {t('navbar.logout')}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
