import billRepo from "./bill.repo";
import { Request } from "express";
import formidable, { IncomingForm } from "formidable";
import { FilterQuery, UpdateQuery } from "mongoose";
import { IBill } from "./bill.types";
import clientServices from "../client/client.services";
import { METER_DATA, METER_TYPES } from "../../utilities/constants";
import fs from "fs"
import { BILL_RESPONSES } from "./bill.responses";

const find = async () => await billRepo.find();

const findOne = async (id: string) => await billRepo.findOne({ _id: id });

const payBill = async (id: string) => {
    const result = await billRepo.update({ _id: id }, { $set: { isPaid: true } });
    if (result.modifiedCount < 1) throw BILL_RESPONSES.PAYMENT_FAILURE;
    return BILL_RESPONSES.PAYMENT_SUCCESS
}

const calculateRevenue = async () => {
    const allBills = await billRepo.find();
    let totalRevenue = allBills.reduce((total, curr) => total += curr.amount, 0);

    // let pendingBillAmount = (await billRepo.find({isPaid: false})).reduce((total,curr) => total += curr.amount, 0)
    let pendingBillAmount = allBills.filter(bill => !bill.isPaid).reduce((total, curr) => total += curr.amount, 0)
    // const averageNormalRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.NORMAL))
    // const averageCommercialRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.COMMERCIAL))
    // const averageSolarRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.SOLAR))

    const averageNormalRevenue = Math.ceil(calculateAverage(await (billRepo.find({ meter: METER_TYPES.NORMAL }))))
    const averageCommercialRevenue = Math.ceil(calculateAverage(await (billRepo.find({ meter: METER_TYPES.COMMERCIAL }))))
    const averageSolarRevenue = Math.ceil(calculateAverage(await (billRepo.find({ meter: METER_TYPES.SOLAR }))))

    return {
        totalAmount: totalRevenue,
        pendingAmount: pendingBillAmount,
        average: {
            normal: averageNormalRevenue,
            commercial: averageCommercialRevenue,
            solar: averageSolarRevenue
        }
    }
}

const calculateAverage = (bills: IBill[]) => {
    let total = bills.reduce((total, curr) => total += curr.amount, 0);
    return total / bills.length;
}
const pendingBillPerClient = async () => await billRepo.find({ isPaid: false }).populate("clientId", "_id name")

const calculateAmount = (units: number, meter: string) => {
    let rpu = 0;
    if (meter === METER_DATA.NORMAL.name) rpu = METER_DATA.NORMAL.rate
    else if (meter === METER_DATA.COMMERCIAL.name) rpu = METER_DATA.COMMERCIAL.rate
    else if (meter === METER_DATA.SOLAR.name) rpu = METER_DATA.SOLAR.rate
    const amount = units * rpu
    return amount
}
// const writeFile = async (file: any) => {
//     try {
//         if (!fs.existsSync("images")) {
//             fs.mkdirSync("images")
//         }
//         else {
//             fs.writeFileSync(`./images/`, file)
//         }
//     } catch (error) {
//         throw BILL_RESPONSES.IMAGE_PROBLEM
//     }
// }

//TODO: IMAGE HANDLING
const generate = async (req: Request) => {
    const form = new IncomingForm()
    let generatedBill;

    try {
        form.parse(req, async (err, fields, file) => {
            if (err) throw BILL_RESPONSES.IMAGE_PROBLEM;
            const { clientId, units } = fields;
            if (!clientId || !units) throw BILL_RESPONSES.MISSING_FIELDS;
            const client = await clientServices.findOne({ _id: clientId });
            if (!client) throw BILL_RESPONSES.SOMETHING_WENT_WRONG;

            let imgPath = JSON.parse(JSON.stringify(file)).photo.filepath
            let imageFile = fs.readFileSync(imgPath, { encoding: "utf-8" })
            // await writeFile(imageFile)
            const billData = {
                clientId: clientId,
                issuedBy: client.workerId,
                units: fields.units,
                meter: client.meter,
                amount: calculateAmount(+units, client.meter),
                updated: Date.now(),
                isPaid: false,
                photo: { path: imgPath },
            }
            // product.photo.path = fs.readFileSync(file.photo.path);
            generatedBill = await billRepo.create(billData)
            console.log(generatedBill)

        })
        return generatedBill

    } catch (error) {
        console.log(error)
    }


}


export default {
    generate, find, findOne, calculateRevenue, payBill, pendingBillPerClient
}