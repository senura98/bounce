import axios from 'axios'

const API_BASE_URL = 'https://api.nasa.gov';
// const API_KEY = process.env.NASA_API_KEY; 
const API_KEY = 'fyf1ybkNB6s8jpQBvts6Tf27IoijgaR4O0PHrkDD';  


// Function to get the Astronomy Picture of the Day (APOD) from NASA API
export const getApodData = async () => {
  try {
    console.log("NASA API Key:", API_KEY);
    const response = await axios.get(`${API_BASE_URL}/planetary/apod?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch APOD data: ${error.message}`);
  }
};
