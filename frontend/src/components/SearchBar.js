import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/weather/${location}`);
      onSearch(response.data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;