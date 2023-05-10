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
const user_repo_1 = __importDefault(require("./user.repo"));
const client_services_1 = __importDefault(require("../client/client.services"));
const create = (user) => user_repo_1.default.create(user);
const find = (filterParam = {}) => __awaiter(void 0, void 0, void 0, function* () { return user_repo_1.default.find(filterParam); });
const allClients = (filterParam) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = filterParam;
    return yield client_services_1.default.find({ workerId: id });
});
const allWorkers = () => user_repo_1.default.find({ role: "2" }).select({ password: 0 });
const findOne = (filterParam) => user_repo_1.default.findOne(filterParam);
const update = (filterParam, data) => user_repo_1.default.update(filterParam, data);
exports.default = {
    create, find, findOne, update, allClients, allWorkers
};
//# sourceMappingURL=user.service.js.map