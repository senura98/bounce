import express from 'express';
import { getMarsWeatherData } from '../controllers/weatherController.js';

const router = express.Router();

router.get('/get-weather', getMarsWeatherData);

export default router;