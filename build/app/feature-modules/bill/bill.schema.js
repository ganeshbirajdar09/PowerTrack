"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const base_schema_1 = require("../../utilities/base-schema");
const BillSchema = new base_schema_1.BaseSchema({
    clientId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "client",
        // required: true
    },
    issuedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        // required: true
    },
    units: {
        type: Number,
        // required: true
    },
    meter: {
        type: String,
        // required: true
    },
    amount: {
        type: Number,
    },
    updated: {
        type: Date,
        default: Date.now
    },
    isPaid: {
        type: Boolean,
        required: false,
        default: false
    },
    photo: {
        type: {
            path: String
        }
    },
});
exports.BillModel = (0, mongoose_1.model)("bill", BillSchema);
//# sourceMappingURL=bill.schema.js.map