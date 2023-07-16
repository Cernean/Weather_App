//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WeatherDetails from './pages/WeatherDetails';
import Error404 from './Error404';
import UserAuth from './components/UserAuth';
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/weather/:location" element={<WeatherDetails />} />
        <Route exacy path="/" element={<Error404 />} />
        <Route exact path="/signin" element={<UserAuth />} />
        <Route exact path="/search" element={<SearchBar />} />
        </Routes>
    </Router>
  );
};

export default App;

