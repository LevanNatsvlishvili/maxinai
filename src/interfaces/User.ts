export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

// Types

// Users
export type UpdateUser = (e: React.FormEvent<HTMLFormElement>, updatedUser: User) => Promise<void>;
export type deleteUser = (id: number) => Promise<void>;
export type loadUsers = () => Promise<void>;

// Form
export type handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type editUser = (id: number) => void;
