import { useState } from 'react';
import { editUser, handleInputChange } from '../interfaces/User';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
interface useForm {
  editUser: editUser;
  handleInputChange: handleInputChange;
  currentUser: User | null;
}

function useForm(data: User[]): useForm {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentUser((prev) => {
      if (prev) {
        return {
          ...prev,
          [name as keyof User]: value,
        };
      }
      return null;
    });
  };

  const editUser = (id: number) => {
    const [user] = data.filter((row) => row.id === id);
    setCurrentUser(user);
  };

  return { editUser, currentUser, handleInputChange };
}

export default useForm;
