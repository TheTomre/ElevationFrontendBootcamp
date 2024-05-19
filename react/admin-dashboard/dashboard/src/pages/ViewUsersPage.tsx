import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { User } from "../types/User";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import Filter from "../components/Filter";
import SortSelect from "../components/SortSelect";
import PaginationControls from "../components/PaginationControls";
import { useTranslation } from 'react-i18next';

const ViewUsersPage: React.FC = () => {
  const { users, getUsers, deleteUserById } = useUser();
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<'firstName' | 'email'>('firstName');
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers(page, limit);
      setSortedUsers(fetchedUsers);
      setTotalPages(Math.ceil(users.length / limit));
    };
    fetchUsers();
  }, [getUsers, page, limit, users.length]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
    );
    const sorted = filtered.sort((a, b) => {
      if (sortKey === 'firstName') {
        return a.firstName.localeCompare(b.firstName);
      }
      return a.email.localeCompare(b.email);
    });
    setSortedUsers(sorted.slice(0, limit));
  }, [users, filter, sortKey, limit]);

  const openModal = (id: string) => {
    setUserIdToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserIdToDelete(null);
  };

  const confirmDelete = async () => {
    if (userIdToDelete) {
      await deleteUserById(userIdToDelete);
      getUsers(page, limit); // Refresh users after deletion
      closeModal();
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-gray-100 dark:bg-darkBackground">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-darkText">{t('users.title')}</h1>
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} placeholder={t('users.filter')} />
      <SortSelect
        sortKey={sortKey}
        onChange={(e) => setSortKey(e.target.value as 'firstName' | 'email')}
        label={t('users.sortBy')}
        options={[
          { value: 'firstName', label: t('users.firstName') },
          { value: 'email', label: t('users.email') },
        ]}
      />
      <ul className="space-y-2">
        {sortedUsers.map((user) => (
          <li key={user.id} className="bg-white dark:bg-darkCard p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <span className="font-bold text-gray-900 dark:text-darkText">{user.firstName} {user.lastName}</span> - {user.email}
            </div>
            <div>
              <Link to={`/edit-user/${user.id}`}>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
                  {t('users.edit')}
                </button>
              </Link>
              <button
                onClick={() => openModal(user.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                {t('users.delete')}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <PaginationControls
        page={page}
        totalPages={totalPages}
        onPrevious={() => setPage((prev) => Math.max(prev - 1, 1))}
        onNext={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        label={t('users.page')}
      />
      <DeleteConfirmationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default ViewUsersPage;
