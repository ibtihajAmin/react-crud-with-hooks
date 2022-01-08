import React, { useEffect, useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdateUserData = (e) => {
    e.preventDefault();
    props.updateUser(user.id, user);
  };

  return (
    <div>
      <form onSubmit={handleUpdateUserData}>
        <label for="exampleInputEmail1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label for="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <button class="btn btn-outline-success mt-3 me-2">Update user</button>
        <button
          class="btn btn-outline-danger mt-3"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
