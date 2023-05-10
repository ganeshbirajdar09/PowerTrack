"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utilities/base-schema");
const RoleSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    _id: {
        type: String,
        required: true,
        unique: true
    }
});
exports.RoleModel = (0, mongoose_1.model)("role", RoleSchema);
//# sourceMappingURL=role.schema.js.map