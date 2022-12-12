import Table from 'react-bootstrap/Table';
import UserRows from './UserRows';


function UserList({users}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((el)=>(
            <UserRows key={el.id} el={el}/>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;