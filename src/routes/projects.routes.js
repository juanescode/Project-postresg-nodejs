import { Router } from "express";
const router = Router();
import * as projectsCtrl from "../controllers/projects.controller.js";

router.get("/projects", projectsCtrl.getProjects);
router.post("/projects", projectsCtrl.createProject);
router.get("/projects/:id", projectsCtrl.getProjectById);
router.put("/projects/:id", projectsCtrl.updateProject);
router.delete("/projects/:id", projectsCtrl.deleteProject);

router.get("/projects/:id/tasks", projectsCtrl.getProjectTask);

export default router;
