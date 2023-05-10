import { model } from "mongoose";
import { BaseSchema } from "../../utilities/base-schema";
import { IRole } from "./role.types";

const RoleSchema = new BaseSchema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    _id: {
        type: String,
        required: true,
        unique: true
    }
})

type RoleDocument = Document & IRole;

export const RoleModel = model<RoleDocument>("role",RoleSchema)