import { Router } from "express";
import {
  taskValidations,
  applyTaskValidation,
} from "../validations/validations.js";
import { control } from "../controllers/controllers.js";

export const router = Router();

//*READ ONE
router.get("/api/task/:id", control.getOneTask);

//*READ ALL
router.get("/api/task/", control.getTasks);

//*CREATE NEW
router.post(
  "/api/task/",
  taskValidations,
  applyTaskValidation,
  control.createTask
);

//*UPDATE
router.put(
  "/api/task/:id",
  taskValidations,
  applyTaskValidation,
  control.updateTask
);

//*DELETE ONE
router.delete("/api/task/:id", control.deleteTask);
