import React from 'react';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>User Profile</h2>
      </main>

      <footer>
        <p>&copy; 2023 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserProfile;
