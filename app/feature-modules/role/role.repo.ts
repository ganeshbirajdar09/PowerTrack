import { RoleModel } from "./role.schema";
import { IRole } from "./role.types";

const create =  (role: IRole) =>  RoleModel.create(role);
const find = (filterParam: Partial<IRole>) => RoleModel.find(filterParam)

export default {
    create,find
}