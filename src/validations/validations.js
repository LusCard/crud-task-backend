import { checkSchema } from "express-validator";
import { validationResult } from "express-validator";

export const taskValidations = checkSchema({
  title: {
    isLength: { min: 1, max: 255 },
    notEmpty: { errorMessage: "Title must be at least 1 character" },
  },
  description: {
    isLength: { min: 1 },
    notEmpty: { errorMessage: "Description required" },
  },
});

export const applyTaskValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};
