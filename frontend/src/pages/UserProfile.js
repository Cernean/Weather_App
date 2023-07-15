import React from "react";
import { NavLink } from 'react-router-dom';


const UserProfile = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/weather" activeClassName="active">Weather</NavLink>
        </div>
    );
};

export default UserProfile;