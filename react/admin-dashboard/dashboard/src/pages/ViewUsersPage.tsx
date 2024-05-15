import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import { User } from "../types/User";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

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
    <div className="container mx-auto p-4 max-w-xl bg-gray-100 dark:bg-darkBackground">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-darkText">Users</h1>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-darkText mb-1">Filter: </label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by name or email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-darkText mb-1">Sort By: </label>
        <select
          onChange={(e) => setSortKey(e.target.value as 'firstName' | 'email')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-500 dark:focus:border-gray-500"
        >
          <option value="firstName">First Name</option>
          <option value="email">Email</option>
        </select>
      </div>
      <ul className="space-y-2">
        {sortedUsers.map((user) => (
          <li key={user.id} className="bg-white dark:bg-darkCard p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <span className="font-bold text-gray-900 dark:text-darkText">{user.firstName} {user.lastName}</span> - {user.email}
            </div>
            <div>
              <Link to={`/edit-user/${user.id}`}>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => openModal(user.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-gray-700 dark:text-darkText">
          Page {page} of {totalPages}
        </div>
        <button
          onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={page >= totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <DeleteConfirmationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default ViewUsersPage;
