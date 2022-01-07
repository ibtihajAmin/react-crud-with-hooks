import React, { useState } from 'react';

const AddUser = (props) => {
    const initialFormState = {
        id:null,
        name:'',
        username:''
    }

    const [user,setUser] = useState(initialFormState);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser({...user, [name] : value})
        console.log(name,value);
    }

    const handleUserInput = (e) => {
        e.preventDefault();
        if(!user.name || !user.username) {
            alert('Value is required. Please provide the value');
            return;
        }

        props.addUser(user);
        setUser(initialFormState);
    }

    return (
        <div>
            <form onSubmit={handleUserInput}>
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" value={user.name} onChange={handleInputChange} class="form-control" id="exampleFormControlInput1" placeholder="Name" name="name" />
            <label for="exampleFormControlInput1" class="form-label">Username</label>
            <input type="text" value={user.username} onChange={handleInputChange} class="form-control" id="exampleFormControlInput1" placeholder="Username" name="username" />
            
            <button class="btn btn-outline-success mt-2">Add new user</button>
            </form>
        </div>
    );
};

export default AddUser;