import { useEffect, useState } from 'react';
import axios from 'axios';
import queryBuilder, { query } from '../utils/queryBuilder';
import { User, UpdateUser, loadUsers, deleteUser } from '../interfaces/User';

interface useUsers {
  data: User[];
  loadUsers: loadUsers;
  deleteUser: deleteUser;
  updateUser: UpdateUser;
}

const users = 'http://localhost:5000/users';
const q: query = { page: 1, limit: 20 };

function useUsers(): useUsers {
  const [data, setData] = useState<User[]>([]);
  const [query, setQuery] = useState({ ...q });

  const loadUsers = async (): Promise<void> => {
    const res = await axios.get(`${users}?${queryBuilder(query)}`);
    if (res?.data?.length) {
      setData((p) => [...p, ...res.data]);
      setQuery((p) => ({ ...p, page: p.page + 1 }));
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`${users}/${id}`);
      const updatedData = data.filter((user) => user.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const updateUser = async (e: React.FormEvent<HTMLFormElement>, updatedUser: User): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.put(`${users}/${updatedUser.id}`, updatedUser);
      const updatedData = data.map((user) => (user.id === updatedUser.id ? res.data : user));
      setData(updatedData);
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  console.log(query.page);

  useEffect(() => {
    loadUsers();
  }, []);

  return { data, loadUsers, deleteUser, updateUser };
}

export default useUsers;
