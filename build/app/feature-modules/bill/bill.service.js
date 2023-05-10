"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bill_repo_1 = __importDefault(require("./bill.repo"));
const formidable_1 = require("formidable");
const client_services_1 = __importDefault(require("../client/client.services"));
const constants_1 = require("../../utilities/constants");
const fs_1 = __importDefault(require("fs"));
const bill_responses_1 = require("./bill.responses");
const find = () => __awaiter(void 0, void 0, void 0, function* () { return yield bill_repo_1.default.find(); });
const findOne = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield bill_repo_1.default.findOne({ _id: id }); });
const payBill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bill_repo_1.default.update({ _id: id }, { $set: { isPaid: true } });
    if (result.modifiedCount < 1)
        throw bill_responses_1.BILL_RESPONSES.PAYMENT_FAILURE;
    return bill_responses_1.BILL_RESPONSES.PAYMENT_SUCCESS;
});
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBills = yield bill_repo_1.default.find();
    let totalRevenue = allBills.reduce((total, curr) => total += curr.amount, 0);
    // let pendingBillAmount = (await billRepo.find({isPaid: false})).reduce((total,curr) => total += curr.amount, 0)
    let pendingBillAmount = allBills.filter(bill => !bill.isPaid).reduce((total, curr) => total += curr.amount, 0);
    // const averageNormalRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.NORMAL))
    // const averageCommercialRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.COMMERCIAL))
    // const averageSolarRevenue = calculateAverage(allBills.filter(bill => bill.meter === METER_TYPES.SOLAR))
    const averageNormalRevenue = Math.ceil(calculateAverage(yield (bill_repo_1.default.find({ meter: constants_1.METER_TYPES.NORMAL }))));
    const averageCommercialRevenue = Math.ceil(calculateAverage(yield (bill_repo_1.default.find({ meter: constants_1.METER_TYPES.COMMERCIAL }))));
    const averageSolarRevenue = Math.ceil(calculateAverage(yield (bill_repo_1.default.find({ meter: constants_1.METER_TYPES.SOLAR }))));
    return {
        totalAmount: totalRevenue,
        pendingAmount: pendingBillAmount,
        average: {
            normal: averageNormalRevenue,
            commercial: averageCommercialRevenue,
            solar: averageSolarRevenue
        }
    };
});
const calculateAverage = (bills) => {
    let total = bills.reduce((total, curr) => total += curr.amount, 0);
    return total / bills.length;
};
const pendingBillPerClient = () => __awaiter(void 0, void 0, void 0, function* () { return yield bill_repo_1.default.find({ isPaid: false }).populate("clientId", "_id name"); });
const calculateAmount = (units, meter) => {
    let rpu = 0;
    if (meter === constants_1.METER_DATA.NORMAL.name)
        rpu = constants_1.METER_DATA.NORMAL.rate;
    else if (meter === constants_1.METER_DATA.COMMERCIAL.name)
        rpu = constants_1.METER_DATA.COMMERCIAL.rate;
    else if (meter === constants_1.METER_DATA.SOLAR.name)
        rpu = constants_1.METER_DATA.SOLAR.rate;
    const amount = units * rpu;
    return amount;
};
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
const generate = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const form = new formidable_1.IncomingForm();
    let generatedBill;
    try {
        form.parse(req, (err, fields, file) => __awaiter(void 0, void 0, void 0, function* () {
            if (err)
                throw bill_responses_1.BILL_RESPONSES.IMAGE_PROBLEM;
            const { clientId, units } = fields;
            if (!clientId || !units)
                throw bill_responses_1.BILL_RESPONSES.MISSING_FIELDS;
            const client = yield client_services_1.default.findOne({ _id: clientId });
            if (!client)
                throw bill_responses_1.BILL_RESPONSES.SOMETHING_WENT_WRONG;
            let imgPath = JSON.parse(JSON.stringify(file)).photo.filepath;
            let imageFile = fs_1.default.readFileSync(imgPath, { encoding: "utf-8" });
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
            };
            // product.photo.path = fs.readFileSync(file.photo.path);
            generatedBill = yield bill_repo_1.default.create(billData);
            console.log(generatedBill);
        }));
        return generatedBill;
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = {
    generate, find, findOne, calculateRevenue, payBill, pendingBillPerClient
};
//# sourceMappingURL=bill.service.js.map