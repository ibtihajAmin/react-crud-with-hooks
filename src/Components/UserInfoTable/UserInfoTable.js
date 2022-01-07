import React from 'react';

const UserInfoTable = (props) => {
    return (
        <div>
            <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
      {
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
            <button type="button" class="btn btn-outline-secondary me-2">Edit</button>
              <button type="button" class="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
      </table>
        </div>
    );
};

export default UserInfoTable;