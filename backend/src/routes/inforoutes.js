import express from 'express';
import { getApod } from '../controllers/infoController.js';

const router = express.Router();

router.get('/get-info', getApod); 

export default router;  
