import axios from 'axios';

const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(`https://www.ncei.noaa.gov/cdo-web/api/v2/locations=${location}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export { fetchWeatherData };

