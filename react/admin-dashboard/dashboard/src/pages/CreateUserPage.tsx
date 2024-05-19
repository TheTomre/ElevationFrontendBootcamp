import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useTranslation } from 'react-i18next';

const CreateUserPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const { createUser } = useUser();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !dob) {
      setError(t('createUser.errorRequired'));
      return;
    }
    if (!email.includes('@')) {
      setError(t('createUser.errorEmail'));
      return;
    }
    if (password.length < 6) {
      setError(t('createUser.errorPassword'));
      return;
    }
    const result = await createUser({ firstName, lastName, email, password, dob });
    if ('error' in result) {
      setError(result.error);
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setDob('');
      setError('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">{t('createUser.title')}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">{t('createUser.firstName')}</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">{t('createUser.lastName')}</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">{t('createUser.email')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">{t('createUser.password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-darkText">{t('createUser.dob')}</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          {t('createUser.createButton')}
        </button>
      </form>
    </div>
  );
};

export default CreateUserPage;
