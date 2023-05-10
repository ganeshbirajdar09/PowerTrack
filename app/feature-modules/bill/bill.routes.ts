import { Router, Request, Response, NextFunction } from "express";
import { permit } from "../../utilities/authorize";
import { ROLES } from "../auth/auth.data";
import { ResponseHandler } from "../../utilities/response-handler";
import billService from "./bill.service";
import { BILL_CREATION_VALIDATIONS, parsedForm } from "./bill.validations";

const router = Router();

router.post("/generate", permit([ROLES.WORKER]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await billService.generate(req);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.patch("/:id", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await billService.payBill(id);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.get("/", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await billService.find();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.get("/revenue", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await billService.calculateRevenue();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.get("/pending", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await billService.pendingBillPerClient();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})

router.get("/:id", permit([ROLES.ADMIN, ROLES.WORKER]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const result = await billService.findOne(id);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
export default router;