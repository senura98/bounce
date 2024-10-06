import express from "express";
import cors from "cors";
import { errorHandler } from "./src/utils/errorHandling.js";
import indexRouter from './src/routes/index.js'; // Import router, not infoRoutes

const app = express();

const port = process.env.PORT || 8080

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Use environment variable or local frontend
    optionsSuccessStatus: 200 
  };

app.use(cors(corsOptions));


app.use("/", indexRouter);


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
