import { getMarsWeather } from '../services/marsservice.js';

// Controller function to handle the Mars weather API request
export const getMarsWeatherData = async (req, res, next) => {
  try {
    const weatherData = await getMarsWeather();
    res.status(200).json(weatherData);  // Send refined data to the frontend
  } catch (error) {
    next(error);  // Pass error to the error handler middleware
  }
};
