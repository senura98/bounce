import express from "express";
import cors from "cors";
import { errorHandler } from "./src/utils/errorHandling.js";
import indexRouter from './src/routes/index.js'; // Import router, not infoRoutes

const app = express();

const port = process.env.PORT || 8080

const allowedOrigins = ['http://localhost:5173', 'https://your-production-frontend-domain.com'];
const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

app.use(cors(corsOptions));


app.use("/", indexRouter);


app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
