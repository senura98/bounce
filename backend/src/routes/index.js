import { Router } from "express";
import inforoutes from './inforoutes.js'; 
import weatherroutes from "./weatherroutes.js";


const router = Router();

router.get("/", (req, res) => res.status(200).send({ status: "SUCCESS" }));

router.use("/apod", inforoutes);

router.use("/mars-weather", weatherroutes);

export default router;