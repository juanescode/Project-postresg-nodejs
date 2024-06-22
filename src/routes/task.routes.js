import { Router } from "express";
const router = Router();
import * as taskCtrl from "../controllers/task.controller.js";

router.get("/tasks", taskCtrl.getTasks);
router.get("/tasks/:id", taskCtrl.getTaskById);
router.post("/tasks", taskCtrl.createTask);
router.put("/tasks/:id", taskCtrl.updateTask);
router.delete("/tasks/:id", taskCtrl.deleteTask);

export default router;