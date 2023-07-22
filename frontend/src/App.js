//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import WeatherDetails from './pages/WeatherDetails';
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import CurrentUserProvider from './contexts/CurrentUser'


const App = () => {
  return (
    <CurrentUserProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/weather/:location" element={<WeatherDetails />} />
        <Route exact path="/search" element={<SearchBar />} />
        <Route exact path="/signup" element={<SignUpForm />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
    </CurrentUserProvider>
  );
};

export default App;

