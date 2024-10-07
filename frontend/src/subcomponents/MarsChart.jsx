import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the chart components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Marschart = ({ chartData }) => {
  return (
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <div className="w-full h-[400px]">  {/* Set height explicitly to ensure proper resizing */}
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,  // Disable aspect ratio to let chart resize properly
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Mars High and Low Temperatures',
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                reverse: true,
                ticks: {
                  callback: (value) => `${value}°F`,
                  stepSize: 10,  // Adjust for better tick spacing
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Marschart;