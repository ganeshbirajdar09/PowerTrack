"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserModel.create(user);
const find = (filterParam) => user_schema_1.UserModel.find(filterParam);
const findOne = (filterParam) => user_schema_1.UserModel.findOne(filterParam);
const update = (filterParam, data) => user_schema_1.UserModel.updateMany(filterParam, data);
exports.default = {
    create, find, findOne, update
};
//# sourceMappingURL=user.repo.js.map