import React from 'react';

const RapidScatDetail = () => {
  // You can replace this data with actual data fetched from an API
  const missionData = {
    title: "RAPIDSCAT Mission",
    description: "Improve weather forecasting on Earth, provide cross-calibration for all international satellites...",
    sol: 265,
    date: "August 25",
    highTemp: "-15°F",
    lowTemp: "-147°F",
    previousData: [
      { sol: 259, date: "Aug. 19", highTemp: "-17°F", lowTemp: "-150°F" },
      { sol: 260, date: "Aug. 20", highTemp: "-19°F", lowTemp: "-151°F" },
      // Add more weather data...
    ],
  };

  return (
    <section className="p-10 bg-dark text-light min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">{missionData.title}</h1>
        <p className="mt-4 text-lg">{missionData.description}</p>
        
        {/* Additional mission data */}
        <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <div>
            <h2 className="text-4xl font-bold">Sol {missionData.sol}</h2>
            <p className="text-xl">{missionData.date}</p>
          </div>
          <div className="text-right">
            <p className="text-xl">High: {missionData.highTemp}</p>
            <p className="text-xl">Low: {missionData.lowTemp}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidScatDetail;
