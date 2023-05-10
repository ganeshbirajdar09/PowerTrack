"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user/user.routes"));
const auth_routes_1 = __importDefault(require("./auth/auth.routes"));
const client_routes_1 = __importDefault(require("./client/client.routes"));
const bill_routes_1 = __importDefault(require("./bill/bill.routes"));
exports.default = {
    UserRouter: user_routes_1.default,
    AuthRouter: auth_routes_1.default,
    ClientRouter: client_routes_1.default,
    BillRouter: bill_routes_1.default
};
//# sourceMappingURL=index.js.map