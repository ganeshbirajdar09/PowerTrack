import { FilterQuery, UpdateQuery } from "mongoose";
import { BillModel } from "./bill.schema"
import { IBill } from "./bill.types";


const create = (bill: UpdateQuery<IBill>) => BillModel.create(bill);

const find = (filterParam: FilterQuery<IBill> = {}) => BillModel.find({})

const findOne = (filterparam:FilterQuery<IBill>) => BillModel.findOne(filterparam);

const update = (filterParam: FilterQuery<IBill>, data: UpdateQuery<IBill>) => BillModel.updateMany(filterParam, data)



export default {
    create,find,findOne,update
}