"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_REGISTER_VALIDATIONS = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.CLIENT_REGISTER_VALIDATIONS = [
    (0, express_validator_1.body)("name").isString().isLength({ min: 5 }),
    (0, express_validator_1.body)("address").isString().withMessage("address is required"),
    (0, express_validator_1.body)("meter").custom(m => ["pending", "accepted", "rejected"].includes(m)).isString().withMessage("meter is required"),
    (0, express_validator_1.body)("workerId").isString().withMessage("workerId is required"),
    validate_1.validate
];
//# sourceMappingURL=client.validations.js.map