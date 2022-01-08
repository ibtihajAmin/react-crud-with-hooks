import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import UserInfoTable from './Components/UserInfoTable/UserInfoTable';

function App() {
  const usersData = [
    { id: 1, name: 'Akash', username: 'asif_karim' },
    { id: 2, name: 'Shohan', username: 'dreamBoy' },
    { id: 3, name: 'Ashraful', username: 'Hunter' },
    { id: 4, name: 'Saad', username: 'chotoSaad' }
  ]

  const [users,setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user=>user.id!==id))
  }

  return (
    <div className="container mt-3">
      <h2>CRUD app with react</h2>
      <div class="row align-items-start">
    <div class="col mt-2">
      <h2>Add user</h2>
      <AddUser addUser={addUser}></AddUser>
    </div>
    <div class="col mt-2">
      <h2>View user</h2>
      <UserInfoTable users={users} deleteUser={deleteUser}></UserInfoTable>
    </div>
 
  </div>
    </div>
  );
}

export default App;
