// src/components/GoalSetting.js

import React, { useState } from 'react';

const GoalSetting = () => {
  const [goal, setGoal] = useState('');

  const handleGoalSet = () => {
    console.log(`Goal set: ${goal}`);
    // You can save the goal to state or a backend service here
  };

  return (
    <div className="goal-setting">
      <h2>Set Your Fitness Goal</h2>
      <input
        type="text"
        placeholder="Goal (e.g. Run 5km)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={handleGoalSet}>Set Goal</button>
    </div>
  );
};

export default GoalSetting;
