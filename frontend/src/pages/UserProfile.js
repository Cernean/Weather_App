import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Logic to determin if the form is shown.
// Logic to determin wich form is shown.
// bring the components in.
const UserProfile = () => {
    const [userProfile, setUserProfile] = useState({
    });

    const [showForm, setShowForm] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formFields = {
            username: event.target.username.value,
            email: event.target.email.value,
            age: parseInt(event.target.age.value),
            address: event.target.address.value,
        };

        setUserProfile(formFields);
        setShowForm(false);
    };
    return (
        <div>
          <h2>User Profile</h2>
          <div>
            <strong>Username:</strong> {userProfile.username}
          </div>
          <div>
            <strong>Email:</strong> {userProfile.email}
          </div>
          <div>
            <strong>Age:</strong> {userProfile.age}
          </div>
          <div>
            <strong>Address:</strong> {userProfile.address}
          </div>
          {!showForm ? (
            <button onClick={() => setShowForm(true)}>Edit</button>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <label>
                Username:
                <input type="text" name="username" defaultValue={userProfile.username} />
              </label>
              <label>
                Email:
                <input type="email" name="email" defaultValue={userProfile.email} />
              </label>
              <label>
                Age:
                <input type="number" name="age" defaultValue={userProfile.age} />
              </label>
              <label>
                Address:
                <input type="text" name="address" defaultValue={userProfile.address} />
              </label>
              <button type="submit">Save</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          )}
        </div>
      );
    };

export default UserProfile;
