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
const response_handler_1 = require("../../utilities/response-handler");
const client_services_1 = __importDefault(require("./client.services"));
const client_validations_1 = require("./client.validations");
const router = (0, express_1.Router)();
router.get("/", (0, authorize_1.permit)([constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield client_services_1.default.allClients();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/create", client_validations_1.CLIENT_REGISTER_VALIDATIONS, (0, authorize_1.permit)([constants_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = req.body;
        const result = yield client_services_1.default.create(client);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=client.routes.js.map