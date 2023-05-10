"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateDB = void 0;
const auth_service_1 = __importDefault(require("../feature-modules/auth/auth.service"));
const role_service_1 = __importDefault(require("../feature-modules/role/role.service"));
const constants_1 = require("./constants");
const populateDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (let role of constants_1.roleData) {
            yield role_service_1.default.create(role);
        }
        for (let admin of constants_1.adminData) {
            yield auth_service_1.default.register(admin);
        }
    }
    catch (error) {
        console.log('COULD NOT POPULATE DB: ', error);
    }
});
exports.populateDB = populateDB;
//# sourceMappingURL=populate-db.js.map