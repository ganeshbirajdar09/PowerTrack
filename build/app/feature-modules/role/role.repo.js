"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_schema_1 = require("./role.schema");
const create = (role) => role_schema_1.RoleModel.create(role);
const find = (filterParam) => role_schema_1.RoleModel.find(filterParam);
exports.default = {
    create, find
};
//# sourceMappingURL=role.repo.js.map