import { FilterQuery } from "mongoose";
import clientRepo from "./client.repo";
import userService from "../user/user.service";
import { IClient } from "./client.types";
import { USER_RESPONSE } from "../user/user.responses";

const create = async (client: IClient) => {
    const { workerId } = client;
    const allotedWorker = await userService.findOne({ _id: workerId });
    if (!allotedWorker) return USER_RESPONSE.NOT_FOUND;
    await userService.update({ _id: workerId }, { $set: { clients: workerId } })
    return await clientRepo.create(client);
}

const find = (filterParam: FilterQuery<IClient> = {}) => clientRepo.find(filterParam);

const findOne = (filterParam: FilterQuery<IClient>) => clientRepo.findOne(filterParam)

const allClients = () => clientRepo.find({ isDeleted: false });


export default {
    create, find, allClients, findOne
}