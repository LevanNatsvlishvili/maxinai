import useUsers from './hooks/useUsers';
import useForm from './hooks/useForm';
import Table from './components/Table';
import Form from './components/Form';

const tableRows = ['ID', 'First Name', 'Last Name', 'Email', 'Actions'];

function App() {
  const { data, loadUsers, deleteUser, updateUser } = useUsers();
  const { editUser, currentUser, handleInputChange } = useForm(data);

  if (currentUser) {
    return <Form handleInputChange={handleInputChange} updateUser={updateUser} currentUser={currentUser} />;
  }
  return <Table loadUsers={loadUsers} deleteUser={deleteUser} tableRows={tableRows} editUser={editUser} data={data} />;
}

export default App;
