import {getApodData} from '../services/nasaservice.js'

// Controller to fetch APOD data
export const getApod = async (req, res, next) => {
  try {
    const apodData = await getApodData();
    res.json(apodData);
  } catch (error) {
    next(error);
  }
};



