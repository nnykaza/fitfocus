// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FitFocus!</h1>
      <p>Your fitness journey starts here!</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;
