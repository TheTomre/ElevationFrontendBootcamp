import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import InputField from '../components/InputField';
import { useAppDispatch, useAppSelector } from '../store';
import { setCurrentUserById, updateUser as updateUserAction } from '../store/slices/users';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.currentUser);
  const [localUser, setLocalUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  useEffect(() => {
    if (id) {
      dispatch(setCurrentUserById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (user) {
      setLocalUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: '',
        dob: user.dob || '',
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!localUser.firstName) newErrors.firstName = t('editUser.error.firstName');
    if (!localUser.lastName) newErrors.lastName = t('editUser.error.lastName');
    if (!localUser.email) {
      newErrors.email = t('editUser.error.emailRequired');
    } else if (!localUser.email.includes('@')) {
      newErrors.email = t('editUser.error.emailInvalid');
    }
    if (!localUser.password) {
      newErrors.password = t('editUser.error.passwordRequired');
    } else if (localUser.password.length < 6) {
      newErrors.password = t('editUser.error.passwordLength');
    }
    if (!localUser.dob) newErrors.dob = t('editUser.error.dob');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (id) {
      try {
        dispatch(updateUserAction({ id, ...localUser }));
      } catch {
        setErrors({ general: t('editUser.error.updating') });
      }
    } else {
      setErrors({ general: t('editUser.error.userId') });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">{t('editUser.title')}</h2>
        <InputField label={t('editUser.firstName')} type="text" value={localUser.firstName} onChange={(e) => setLocalUser({ ...localUser, firstName: e.target.value })} error={errors.firstName} />
        <InputField label={t('editUser.lastName')} type="text" value={localUser.lastName} onChange={(e) => setLocalUser({ ...localUser, lastName: e.target.value })} error={errors.lastName} />
        <InputField label={t('editUser.email')} type="email" value={localUser.email} onChange={(e) => setLocalUser({ ...localUser, email: e.target.value })} error={errors.email} />
        <InputField label={t('editUser.password')} type="password" value={localUser.password} onChange={(e) => setLocalUser({ ...localUser, password: e.target.value })} error={errors.password} />
        <InputField label={t('editUser.dob')} type="date" value={localUser.dob} onChange={(e) => setLocalUser({ ...localUser, dob: e.target.value })} error={errors.dob} />
        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          {t('editUser.updateButton')}
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;