import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WeatherDetails from './pages/WeatherDetails';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path= "/profile" component={UserProfile} />
                <Route exact path= "/weather/:location" component={WeatherDetails} />          
            </Switch>
        </Router>
    );
};

export default AppRouter;