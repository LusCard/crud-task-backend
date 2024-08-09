import { Router } from "express";
import { control } from "../controllers/controllers.js";

export const router = Router();

//*READ ONE
router.get("/:id", control.getOneTask);

//*READ ALL
router.get("/", control.getTasks);

//*CREATE NEW
router.post("/", control.createTask);

//*UPDATE
router.put("/:id", control.updateTask);

//*DELETE ONE
router.delete("/:id", control.deleteTask);
