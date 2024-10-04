import express from "express";
import cors from "cors";
import { errorHandler } from "./src/utils/errorHandling.js";
import router from './src/routes/inforoutes.js'; // Import router, not infoRoutes



const app = express();

const corsOptions = {
    origin: ['http://localhost:5173']
};

app.use(cors(corsOptions));

// Use the correct name for the router, which is `router`
app.use('/api/info', router);

app.use(errorHandler);

app.listen(8080, () => {
    console.log("server started on port 8080");
});
