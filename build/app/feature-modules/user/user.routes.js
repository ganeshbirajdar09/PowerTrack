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
const express_1 = require("express");
const authorize_1 = require("../../utilities/authorize");
const constants_1 = require("../../utilities/constants");
const user_service_1 = __importDefault(require("./user.service"));
const response_handler_1 = require("../../utilities/response-handler");
const auth_service_1 = __importDefault(require("../auth/auth.service"));
const user_validations_1 = require("./user.validations");
const router = (0, express_1.Router)();
router.post("/create", user_validations_1.WORKER_REGISTER_VALIDATIONS, (0, authorize_1.permit)([constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = req.body;
        const result = yield auth_service_1.default.register(worker);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/clients", (0, authorize_1.permit)([constants_1.ROLES.WORKER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const result = yield user_service_1.default.allClients(user);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/workers", (0, authorize_1.permit)([constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.allWorkers();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/reason", (0, authorize_1.permit)([constants_1.ROLES.WORKER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.allWorkers();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=user.routes.js.map