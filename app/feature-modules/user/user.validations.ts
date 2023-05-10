import { body } from "express-validator";
import { validate } from "../../utilities/validate";

export const WORKER_REGISTER_VALIDATIONS = [
    body("name").isString().isLength({min: 5}),
    body("email").isEmail().withMessage("email is required"),
    body("password").isLength({min: 4}).withMessage("password is required"),
    validate
]