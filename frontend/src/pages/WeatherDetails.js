import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWeatherData } from '../services/api';

const WeatherDetails = () => {
  const { location } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(location)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.log('Error fetching weather data:', error);
      });
  }, [location]);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.location}</h2>
          <p>Temperature: {weatherData.temperature}°F</p>
          <p>Description: {weatherData.description}</p>
        </div>
      ) : (
        <p>Enter a location to ger weather data</p>
      )}
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default WeatherDetails;

