import express from "express";
const app = express();
import projectsRoutes from "./routes/projects.routes.js";
import taskRoutes from './routes/task.routes.js'
import morgan from "morgan";

// Middleware
app.use(morgan("dev"))
app.use(express.json());

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;
