//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WeatherDetails from './pages/WeatherDetails';
import Error404 from './Error404'

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/weather/:location" component={WeatherDetails} />
        <Route path="/" component={Error404} />
    </Router>
  );
};

export default App;

