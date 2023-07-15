import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};
  
  export default Home;