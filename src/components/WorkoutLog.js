// src/components/WorkoutLog.js

import React, { useState } from 'react';

const WorkoutLog = () => {
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');

  const handleLog = () => {
    if (!workout || !duration) {
      setError('Please fill out both fields');
      return;
    }
    console.log(`Logged workout: ${workout} for ${duration} minutes`);
    // Here you would send the data to your database (or state management)
  };

  return (
    <div className="workout-log">
      <h2>Log Your Workout</h2>
      <input
        type="text"
        placeholder="Workout (e.g. Running)"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLog}>Log Workout</button>
    </div>
  );
};

export default WorkoutLog;
