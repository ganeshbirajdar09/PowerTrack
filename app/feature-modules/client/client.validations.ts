import { body } from "express-validator";
import { validate } from "../../utilities/validate";

export const CLIENT_REGISTER_VALIDATIONS = [
    body("name").isString().isLength({min: 5}),
    body("address").isString().withMessage("address is required"),
    body("meter").custom(m => ["pending","accepted","rejected"].includes(m)).isString().withMessage("meter is required"),
    body("workerId").isString().withMessage("workerId is required"),
    validate
]