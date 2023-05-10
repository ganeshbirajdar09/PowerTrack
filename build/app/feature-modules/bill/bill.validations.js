"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BILL_CREATION_VALIDATIONS = exports.parsedForm = void 0;
const express_validator_1 = require("express-validator");
const formidable_1 = require("formidable");
const validate_1 = require("../../utilities/validate");
const parsedForm = () => (req, res, next) => {
    let form = new formidable_1.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err)
            next(err);
    });
};
exports.parsedForm = parsedForm;
exports.BILL_CREATION_VALIDATIONS = [
    (0, express_validator_1.body)("clientId").withMessage("clientId is required"),
    (0, express_validator_1.body)("units").isNumeric().withMessage("units is required"),
    validate_1.validate
];
//# sourceMappingURL=bill.validations.js.map