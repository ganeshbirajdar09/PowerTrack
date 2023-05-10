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
const auth_data_1 = require("../auth/auth.data");
const response_handler_1 = require("../../utilities/response-handler");
const bill_service_1 = __importDefault(require("./bill.service"));
const router = (0, express_1.Router)();
router.post("/generate", (0, authorize_1.permit)([auth_data_1.ROLES.WORKER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_service_1.default.generate(req);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.patch("/:id", (0, authorize_1.permit)([auth_data_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield bill_service_1.default.payBill(id);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/", (0, authorize_1.permit)([auth_data_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_service_1.default.find();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/revenue", (0, authorize_1.permit)([auth_data_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_service_1.default.calculateRevenue();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/pending", (0, authorize_1.permit)([auth_data_1.ROLES.ADMIN]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bill_service_1.default.pendingBillPerClient();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
router.get("/:id", (0, authorize_1.permit)([auth_data_1.ROLES.ADMIN, auth_data_1.ROLES.WORKER]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield bill_service_1.default.findOne(id);
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=bill.routes.js.map