"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_VALIDATOR = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.AUTH_VALIDATOR = [
    (0, express_validator_1.body)("name").isString().withMessage("name is required"),
    (0, express_validator_1.body)("email").isEmail().withMessage("email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 4 }).withMessage("password is required"),
    validate_1.validate
];
//# sourceMappingURL=auth.validations.js.map