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
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_responses_1 = require("./auth.responses");
const bcryptjs_1 = require("bcryptjs");
const auth_data_1 = require("./auth.data");
const user_service_1 = __importDefault(require("../user/user.service"));
const encryptPassword = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const encryptedPassword = yield (0, bcryptjs_1.hash)(user.password, salt);
    user.password = encryptedPassword;
    return user;
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const oldUser = yield user_service_1.default.findOne({ email: user.email });
    if (oldUser)
        throw auth_responses_1.AUTH_RESPONSES.ALREADY_EXISTS;
    yield encryptPassword(user);
    if (!user.role)
        user.role = auth_data_1.ROLES.WORKER;
    return yield user_service_1.default.create(user);
});
const login = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.findOne({ email: credential.email });
    if (!user)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_CREDENTIALS;
    const isPasswordValid = yield (0, bcryptjs_1.compare)(credential.password, user.password);
    if (!isPasswordValid)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_CREDENTIALS;
    const { JWT_SECRET } = process.env;
    const token = (0, jsonwebtoken_1.sign)({ id: user._id, role: user.role }, JWT_SECRET || "");
    const { _id, name, email, role } = user;
    return {
        token,
        user: { _id, name, email, role }
    };
});
exports.default = {
    register,
    login
};
//# sourceMappingURL=auth.service.js.map