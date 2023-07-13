import React from 'react';

const WeatherCard = ({ location, temperature, description }) => {
  return (
    <div>
      <h2>{location}</h2>
      <p>Temperature: {temperature}°F</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherCard;
