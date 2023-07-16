import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Welcome to the Weather App</h2>
      </main>

      <footer>
        <p>&copy; 2023 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
