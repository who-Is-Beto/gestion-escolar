import express from "express";
import cors from "cors";

import config from "./config.js";
import alumnoRouter from "./api/routes/alumno.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api", alumnoRouter);

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`)
);
