import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WeatherDetails from './pages/WeatherDetails';

const AppRouter = () => {
    return (
        <Router>
                <Route exact path="/" component={Home} />
                <Route exact path= "/profile" component={UserProfile} />
                <Route exact path= "/weather/:location" component={WeatherDetails} />          
        </Router>
    );
};

export default AppRouter;