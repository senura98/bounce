import express from "express";
import cors from "cors";
import { errorHandler } from "./src/utils/errorHandling.js";
import indexRouter from './src/routes/index.js'; // Import router, not infoRoutes

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173']
};

app.use(cors(corsOptions));


app.use("/", indexRouter);


app.use(errorHandler);

app.listen(8080, () => {
    console.log("server started on port 8080");
});
