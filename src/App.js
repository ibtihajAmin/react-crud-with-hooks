import { useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser/AddUser";
import EditUser from "./Components/EditUser/EditUser";
import UserInfoTable from "./Components/UserInfoTable/UserInfoTable";

function App() {
  const usersData = [
    { id: 1, name: "Akash", username: "asif_karim" },
    { id: 2, name: "Shohan", username: "dreamBoy" },
    { id: 3, name: "Ashraful", username: "Hunter" },
    { id: 4, name: "Saad", username: "chotoSaad" },
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container mt-3">
      <h2>CRUD app with react</h2>
      <div class="row align-items-start">
        <div class="col mt-2">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              ></EditUser>
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUser addUser={addUser}></AddUser>
            </div>
          )}
        </div>
        <div class="col mt-2">
          <h2>View user</h2>
          <UserInfoTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          ></UserInfoTable>
        </div>
      </div>
    </div>
  );
}

export default App;
