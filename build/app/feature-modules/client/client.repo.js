"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_schema_1 = require("./client.schema");
const create = (client) => client_schema_1.ClientModel.create(client);
const find = (filterParam = {}) => client_schema_1.ClientModel.find(filterParam);
const findOne = (filterParam) => client_schema_1.ClientModel.findOne(filterParam);
exports.default = {
    create, find, findOne
};
//# sourceMappingURL=client.repo.js.map