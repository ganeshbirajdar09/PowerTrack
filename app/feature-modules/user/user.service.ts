import { FilterQuery, UpdateQuery } from "mongoose";
import { IUser } from "./user.types";
import userRepo from "./user.repo";
import clientServices from "../client/client.services";

const create = (user: IUser) => userRepo.create(user);

const find = async (filterParam: FilterQuery<IUser> = {}) => userRepo.find(filterParam)

const allClients = async (filterParam: FilterQuery<IUser>) => {
    const { id } = filterParam;
    return await clientServices.find({ workerId: id })
}
const allWorkers = () => userRepo.find({ role: "2" }).select({ password: 0 })

const findOne = (filterParam: FilterQuery<IUser>) => userRepo.findOne(filterParam);

const update = (filterParam: FilterQuery<IUser>, data: UpdateQuery<IUser>) => userRepo.update(filterParam, data);



export default {
    create, find, findOne, update, allClients, allWorkers
}