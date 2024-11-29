import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';

const UPdate = props => {
     const loadedUser = useLoaderData();

     const handleUpdate = (e) => {
          e.preventDefault();

          const form = e.target;

          const name = form.name.value;
          const email = form.email.value;
          const user = {name, email};
          console.log(user);

          fetch(`http://localhost:8000/users/${loadedUser._id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.modifiedCount > 0){
                    alert('update successfully');
               }
          })
     }
     return (
          <div>
               <p>Update information of {loadedUser.name}</p>
               <form onSubmit={handleUpdate} action="">
                    <input type="text" name="name" defaultValue={loadedUser.name} id="" />
                    <br />
                    <input type="email" name="email" defaultValue={loadedUser.email} id="" />
                    <br />
                    <input type="submit" value="Update" />
               </form>
          </div>
     );
};

UPdate.propTypes = {
     
};

export default UPdate;