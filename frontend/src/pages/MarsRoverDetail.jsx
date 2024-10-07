import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import Marschart from '../components/subcomponents/Marschart';
import MarsSolCards from '../cards/MarsSolCards';
import MarsIcon from '../assets/marsIcon.svg';  // Import your SVG file

const MarsRoverDetail = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const navigate = useNavigate();  // Hook to navigate back to home page

  useEffect(() => {
    // Fetch Mars weather data from the backend API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get('https://bounce-backend-d9ms.onrender.com/mars-weather/get-weather');  // Use your API endpoint
        setWeatherData(response.data);  // Update the weather data state
        prepareChartData(response.data);  // Prepare data for the chart
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Prepare chart data from the fetched weather data
  const prepareChartData = (data) => {
    const labels = data.map((solData) => `Sol ${solData.sol}`);  // Create labels like "Sol 675", "Sol 676", etc.
    const highTemperatures = data.map((solData) => solData.highTemp);  // Extract high temperatures for each sol
    const lowTemperatures = data.map((solData) => solData.lowTemp);    // Extract low temperatures for each sol

    const chartData = {
      labels,
      datasets: [
        {
          label: 'High Temp (°F)',
          data: highTemperatures,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',  // Bar color for high temperatures
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        {
          label: 'Low Temp (°F)',
          data: lowTemperatures,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',  // Bar color for low temperatures
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(chartData);
  };

  if (!weatherData || !chartData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-dark text-light">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div> {/* Spinner */}
      </div>
    ); // Show a loading message if the data hasn't loaded yet
  }

  return (
    <section className="p-10 bg-dark text-light min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          {/* Left: Title and Icon */}
          <div className="flex items-center">
            <h1 className="text-5xl font-bold">Mars Weather</h1>
            <img src={MarsIcon} alt="Mars Icon" className="ml-4 w-8 h-8" /> {/* SVG next to title */}
          </div>

          {/* Right: Back Button */}
          <button
            className="bg-primary text-dark font-semibold py-2 px-4 rounded-lg hover:bg-accent"
            onClick={() => navigate('/')}  // Navigate back to home page
          >
            Back to Home
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Left: Description */}
          <div className="md:w-1/2">
            <p className="mt-4 text-lg">
              NASA's InSight lander is providing daily weather updates from Elysium Planitia, a flat, smooth plain on Mars.
              The weather includes daily high and low temperatures, wind speeds, and atmospheric pressure. The weather data
              is captured for each sol, the Martian day, which is about 24 hours and 39 minutes. <br/><br/>
              InSight's advanced sensors measure seismic activity, air pressure, and magnetic fields, providing crucial data
              to understand Martian climate patterns. This data helps scientists learn more about the planet's atmosphere
              and its evolution over time.<br/><br/>
              The temperature on Mars varies dramatically between day and night, often swinging from a high of -10°F to a low of -100°F.
            </p>
          </div>

          {/* Right: Weather Graph */}
          <Marschart chartData={chartData} />
        </div>

        {/* Cards Section: Show weather data for different sols */}
        <MarsSolCards weatherData={weatherData} />
      </div>
    </section>
  );
};

export default MarsRoverDetail;