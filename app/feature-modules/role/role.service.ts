import roleRepo from "./role.repo";
import { IRole } from "./role.types";

const create = async (role: IRole) => await roleRepo.create(role);
const find = async (filterParam: Partial<IRole>) => await roleRepo.find(filterParam)

export default {
    create,find
}