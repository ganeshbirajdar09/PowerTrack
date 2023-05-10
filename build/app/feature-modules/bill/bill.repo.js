"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bill_schema_1 = require("./bill.schema");
const create = (bill) => bill_schema_1.BillModel.create(bill);
const find = (filterParam = {}) => bill_schema_1.BillModel.find({});
const findOne = (filterparam) => bill_schema_1.BillModel.findOne(filterparam);
const update = (filterParam, data) => bill_schema_1.BillModel.updateMany(filterParam, data);
exports.default = {
    create, find, findOne, update
};
//# sourceMappingURL=bill.repo.js.map