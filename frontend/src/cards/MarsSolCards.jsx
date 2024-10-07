import React from 'react';

const MarsSolCards = ({ weatherData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {weatherData.map((solData) => (
        <div key={solData.sol} className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
          <h3 className="text-2xl font-bold">Sol {solData.sol}</h3>
          <hr className="border-t-4 mt-2 w-16 mx-auto border-blue-500" /> 
          <p className="mt-4">Date: {new Date(solData.date).toLocaleDateString()}</p>
          <p>High: {solData.highTemp !== 'N/A' ? `${solData.highTemp}°F` : 'N/A'}</p>
          <p>Low: {solData.lowTemp !== 'N/A' ? `${solData.lowTemp}°F` : 'N/A'}</p>
          <p>Wind Speed: {solData.windSpeed !== 'N/A' ? `${solData.windSpeed} m/s` : 'N/A'}</p>
          <p>Pressure: {solData.pressure !== 'N/A' ? `${solData.pressure} Pa` : 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default MarsSolCards;
