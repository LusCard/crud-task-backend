import { Router } from "express";
import {control} from "../controllers/controllers.js"

export const router = Router();

router.get("/task/:id", control.getOneTask)
router.get("/tasks/", control.getTasks )
router.post("/task/", control.createTask)
router.put("/task/:id", control.updateTask)
router.delete("/task/:id", control.deleteTask)
