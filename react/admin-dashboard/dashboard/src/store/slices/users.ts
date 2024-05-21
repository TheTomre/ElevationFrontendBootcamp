import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/User';

type UsersState = {
  users: User[];
  currentUser: User | null;
  usersPage: User[];
};

const initialState: UsersState = {
  users: [],
  currentUser: null,
  usersPage: [],
};

function paginate(array: User[], page: number, limit: number) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return array.slice(startIndex, endIndex);
}

function filterAndSort(users: User[], filter: string, sortKey: 'firstName' | 'email') {
  let filteredUsers = users;
  if (filter) {
    const lowercasedFilter = filter.toLowerCase();
    filteredUsers = users.filter((user) =>
      user.firstName.toLowerCase().includes(lowercasedFilter) ||
      user.lastName.toLowerCase().includes(lowercasedFilter) ||
      user.email.toLowerCase().includes(lowercasedFilter)
    );
  }

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return -1;
    if (a[sortKey] > b[sortKey]) return 1;
    return 0;
  });

  return sortedUsers;
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    createUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const targetUserIdx = state.users.findIndex(user => user.id === action.payload.id);
      if (targetUserIdx === -1) throw new Error('Invalid Id on update');
      state.users[targetUserIdx] = action.payload;
    },
    setCurrentUserById(state, action: PayloadAction<string>) {
      const targetUser = state.users.find(user => user.id === action.payload);
      if (!targetUser) throw new Error('Invalid id on set current user');
      state.currentUser = targetUser;
    },
    setUsersPaginated(state, action: PayloadAction<{ page: number; limit: number; filter: string; sort: 'firstName' | 'email' }>) {
      const { page, limit, filter, sort } = action.payload;
      const filteredAndSortedUsers = filterAndSort(state.users, filter, sort);
      state.usersPage = paginate(filteredAndSortedUsers, page, limit);
    },
    deleteUserById(state, action: PayloadAction<string>) {
      const targetUserIdx = state.users.findIndex(user => user.id === action.payload);
      if (targetUserIdx === -1) throw new Error('Invalid id on remove');
      state.users.splice(targetUserIdx, 1);
    },
  },
});

export const { createUser, updateUser, setCurrentUserById, setUsersPaginated, deleteUserById, setUsers } = usersSlice.actions;

export default usersSlice.reducer;