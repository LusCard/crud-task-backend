import { Router } from "express";
import {control} from "../controllers/controllers.js"

export const router = Router();

//*READ ONE
router.get("/task/:id", control.getOneTask)
//*READ ALL
router.get("/tasks", control.getTasks )
 //*CREATE NEW
router.post("/task/", control.createTask)
 //*UPDATE 
router.put("/task/:id", control.updateTask)
 //*DELETE ONE
router.delete("/task/:id", control.deleteTask)
