"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const authorize_1 = require("../utilities/authorize");
const routes_types_1 = require("./routes.types");
const index_1 = __importDefault(require("../feature-modules/index"));
exports.routes = [
    new routes_types_1.Route("/users", index_1.default.UserRouter),
    new routes_types_1.Route("/auth", index_1.default.AuthRouter),
    new routes_types_1.Route("/client", index_1.default.ClientRouter),
    new routes_types_1.Route("/bill", index_1.default.BillRouter),
];
exports.excludedPaths = [
    new authorize_1.ExcludedPath("/auth/login", "POST"),
    new authorize_1.ExcludedPath("/auth/register", "POST"),
];
//# sourceMappingURL=routes.data.js.map