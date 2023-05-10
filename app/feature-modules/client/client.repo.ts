import { FilterQuery } from "mongoose";
import { ClientModel } from "./client.schema";
import { IClient } from "./client.types";

const create = (client: IClient) => ClientModel.create(client);

const find = (filterParam: FilterQuery<IClient> = {}) => ClientModel.find(filterParam);

const findOne = (filterParam: FilterQuery<IClient>) => ClientModel.findOne(filterParam)


export default {
    create,find,findOne
}