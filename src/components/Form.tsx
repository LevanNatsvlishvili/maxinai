import { User, UpdateUser, handleInputChange } from '../interfaces/User';

interface tableRowsProps {
  handleInputChange: handleInputChange;
  currentUser: User;
  updateUser: UpdateUser;
}

function Form(props: tableRowsProps) {
  const { updateUser, currentUser, handleInputChange } = props;

  return (
    <form
      className="form"
      action="SUBMIT"
      onSubmit={(e) => {
        updateUser(e, currentUser);
      }}
    >
      {Object.keys(currentUser).map((key) => {
        console.log(key);
        if (key !== 'id') {
          return (
            <div className="form__input" key={key}>
              <label>{key}</label>
              <input type="text" name={key} value={currentUser[key as keyof User]} onChange={handleInputChange} />
            </div>
          );
        }
        return null;
      })}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
