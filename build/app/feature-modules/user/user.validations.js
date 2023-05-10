"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKER_REGISTER_VALIDATIONS = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.WORKER_REGISTER_VALIDATIONS = [
    (0, express_validator_1.body)("name").isString().isLength({ min: 5 }),
    (0, express_validator_1.body)("email").isEmail().withMessage("email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 4 }).withMessage("password is required"),
    validate_1.validate
];
//# sourceMappingURL=user.validations.js.map