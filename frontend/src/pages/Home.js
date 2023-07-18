import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <header>
        <h1>Weather App</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Profile</Link></li>
          </ul>
        </nav>
      </header>
      <main>
      </main>
      <SearchBar onWeatherData={handleWeatherData} />

      {weatherData ? (
        <div>
          <h3>{weatherData.location}</h3>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Description: {weatherData.description}</p>
        </div>
      ) : (
        <p>Enter a location to get weather data</p>
      )}
    </div>
  );
};

export default Home;

