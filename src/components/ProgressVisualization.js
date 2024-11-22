// src/components/ProgressVisualization.js

import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ProgressVisualization = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Workout Progress',
        data: [30, 40, 50, 60, 70],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="progress-visualization">
      <h2>Your Workout Progress</h2>
      <Line data={data} />
    </div>
  );
};

export default ProgressVisualization;
