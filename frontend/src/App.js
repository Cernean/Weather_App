//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import UserProfilePage from './pages/UserProfile';
import WeatherDetailsPage from './pages/WeatherDetails';

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={UserProfilePage} />
        <Route exact path="/weather/:location" component={WeatherDetailsPage} />
    </Router>
  );
};

export default App;

