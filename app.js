import express from "express";
/* import express from "express"; Needed to switch to commonJS as we had issues with our data*/
import idiomsRouter from "./routes/idiomRoutes";

// Import router from routes folder once that's set up

const app = express();
app.use(express.json());

// Use router for any requests. Define path name
app.use("/", idiomsRouter);

/* export default app; Similarly here*/
export default app;
