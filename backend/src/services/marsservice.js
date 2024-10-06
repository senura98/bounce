import axios from 'axios';

const API_URL = 'https://api.nasa.gov/insight_weather/';
// const API_KEY = process.env.NASA_API_KEY;  
const API_KEY = 'fyf1ybkNB6s8jpQBvts6Tf27IoijgaR4O0PHrkDD';  


// Function to get Mars Weather Data
export const getMarsWeather = async () => {
  try {
    const response = await axios.get(`${API_URL}?api_key=${API_KEY}&feedtype=json&ver=1.0`);

    // Extract only the necessary data from the response
    const sols = response.data.sol_keys;
    console.log('here are the sols',sols)
    const refinedData = sols.map(sol => {
      const weather = response.data[sol];
      return {
        sol,
        date: weather.First_UTC,
        highTemp: weather.AT?.mx || 'N/A',  // Check if the data exists, else return 'N/A'
        lowTemp: weather.AT?.mn || 'N/A',
        windSpeed: weather.HWS?.av || 'N/A',
        pressure: weather.PRE?.av || 'N/A',
      };
    });

    return refinedData;
  } catch (error) {
    throw new Error(`Failed to fetch Mars weather data: ${error.message}`);
  }
};
