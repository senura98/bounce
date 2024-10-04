import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarsRoverDetail = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch Mars weather data from InSight API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=YOUR_NASA_API_KEY&feedtype=json&ver=1.0');
        setWeatherData(response.data);
        prepareChartData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const prepareChartData = (data) => {
    const sols = Object.keys(data.sol_keys);  // Get sol keys

    const temperatures = sols.map((sol) => data[sol].AT.avg);  // Get average temperature for each sol
    const labels = sols.map((sol) => `Sol ${sol}`);  // Set the labels for the chart

    const chartData = {
      labels,
      datasets: [
        {
          label: 'Avg Temperature (°F)',
          data: temperatures,
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };
    setChartData(chartData);
  };

  if (!weatherData || !chartData) {
    return <div>Loading Mars weather data...</div>;
  }

  return (
    <section className="p-10 bg-dark text-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Description on the left and Chart on the right */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Left: Description */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">Mars Weather</h1>
            <p className="mt-4 text-lg">
              NASA's InSight lander is providing daily weather updates from Elysium Planitia, a flat, smooth plain on Mars.
              The weather includes daily high and low temperatures, wind speeds, and atmospheric pressure. The weather data
              is captured for each sol, the Martian day, which is about 24 hours and 39 minutes.
            </p>
          </div>

          {/* Right: Weather Graph */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Mars Average Temperature Over Time',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Cards Section: Show weather data for different sols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(weatherData.sol_keys).map((solKey) => {
            const sol = weatherData[solKey];
            return (
              <div key={solKey} className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
                <h3 className="text-2xl font-bold">Sol {solKey}</h3>
                <p>Date: {sol.First_UTC.split('T')[0]}</p>
                <p>High: {sol.AT.max ? `${sol.AT.max}°F` : 'N/A'}</p>
                <p>Low: {sol.AT.min ? `${sol.AT.min}°F` : 'N/A'}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarsRoverDetail;
