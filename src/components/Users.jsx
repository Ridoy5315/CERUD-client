import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";

const Users = (props) => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:8000/users/${_id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount>0){
          alert('deleted')
          const remaining = users.filter(user => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  
  return (
    <div>
      <p>Total user: {users.length}</p>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.email} : {user.name} : {user._id}{" "}
            <Link to={`/update/${user._id}`}>Update</Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;
