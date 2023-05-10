import mongoose, { model } from "mongoose";
import { BaseSchema } from "../../utilities/base-schema";
import { IBill } from "./bill.types";

const BillSchema = new BaseSchema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
        // required: true
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
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
})


type BillDocument = Document & IBill;


export const BillModel = model<BillDocument>("bill", BillSchema)