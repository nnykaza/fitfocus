import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';  
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import WorkoutLog from './components/WorkoutLog';
import GoalSetting from './components/GoalSetting';
import ProgressVisualization from './components/ProgressVisualization';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/workoutlog" element={<WorkoutLog />} />
        <Route path="/goalsetting" element={<GoalSetting />} />
        <Route path="/progress" element={<ProgressVisualization />} />
      </Routes>
    </Router>
  );
};

export default App;
