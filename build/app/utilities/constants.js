"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminData = exports.roleData = exports.METER_DATA = exports.METER_TYPES = exports.ROLES = void 0;
exports.ROLES = {
    ADMIN: '1',
    WORKER: '2'
};
exports.METER_TYPES = {
    NORMAL: "normal",
    COMMERCIAL: "commercial",
    SOLAR: "solar"
};
exports.METER_DATA = {
    NORMAL: {
        name: "normal",
        rate: 8
    },
    COMMERCIAL: {
        name: "commercial",
        rate: 16
    },
    SOLAR: {
        name: "solar",
        rate: 4
    }
};
exports.roleData = [{ _id: exports.ROLES.ADMIN, name: "admin" }, { _id: exports.ROLES.WORKER, name: "worker" }];
exports.adminData = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: "admin",
        role: exports.ROLES.ADMIN,
    }
];
//# sourceMappingURL=constants.js.map