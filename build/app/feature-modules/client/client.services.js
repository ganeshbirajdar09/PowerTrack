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
const client_repo_1 = __importDefault(require("./client.repo"));
const user_service_1 = __importDefault(require("../user/user.service"));
const user_responses_1 = require("../user/user.responses");
const create = (client) => __awaiter(void 0, void 0, void 0, function* () {
    const { workerId } = client;
    const allotedWorker = yield user_service_1.default.findOne({ _id: workerId });
    if (!allotedWorker)
        return user_responses_1.USER_RESPONSE.NOT_FOUND;
    yield user_service_1.default.update({ _id: workerId }, { $set: { clients: workerId } });
    return yield client_repo_1.default.create(client);
});
const find = (filterParam = {}) => client_repo_1.default.find(filterParam);
const findOne = (filterParam) => client_repo_1.default.findOne(filterParam);
const allClients = () => client_repo_1.default.find({ isDeleted: false });
exports.default = {
    create, find, allClients, findOne
};
//# sourceMappingURL=client.services.js.map