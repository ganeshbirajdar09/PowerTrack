import mongoose, { model } from "mongoose";
import { BaseSchema } from "../../utilities/base-schema";
import { IClient } from "./client.types";

const ClientSchema = new BaseSchema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    //TODO: meter sub-schema pending
    //TODO: convert string to objectid
    meter: {
        type: String,
        required: true
    },
    workerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }

})


type ClientDocument = Document & IClient;


export const ClientModel = model<ClientDocument>("client", ClientSchema)