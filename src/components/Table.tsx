import { deleteUser, editUser, loadUsers, User } from '../interfaces/User';

interface tableRowsProps {
  tableRows: string[];
  data: User[];
  loadUsers: loadUsers;
  deleteUser: deleteUser;
  editUser: editUser;
}

function Table(props: tableRowsProps) {
  const { tableRows, data, deleteUser, editUser, loadUsers } = props;
  return (
    <>
      <div className="table-wrapper">
        <div className="table">
          <div className="table-header">
            {tableRows.map((tableRow, i) => (
              <div key={tableRow + i} className="header__item">
                <a>{tableRow}</a>
              </div>
            ))}
          </div>
          <div className="table-content">
            {data.map((row) => (
              <div key={row.id} className="table-row">
                <div className="table-data">{row.id}</div>
                <div className="table-data">{row.first_name}</div>
                <div className="table-data">{row.last_name}</div>
                <div className="table-data">{row.email}</div>
                <div className="table-data">
                  <div className="table-data__actiions">
                    <div onClick={() => deleteUser(row.id)}>🗑</div>
                    <div onClick={() => editUser(row.id)}>✎</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="load-user">
        <button onClick={loadUsers}>Load more</button>
      </div>
    </>
  );
}

export default Table;
