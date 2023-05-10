import { Router, Request, Response, NextFunction } from "express";
import { permit } from "../../utilities/authorize";
import { ROLES } from "../../utilities/constants";
import { ResponseHandler } from "../../utilities/response-handler";
import clientServices from "./client.services";
import { CLIENT_REGISTER_VALIDATIONS } from "./client.validations";

const router = Router();


router.get("/", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await clientServices.allClients();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.post("/create", CLIENT_REGISTER_VALIDATIONS, permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const client = req.body;
        const result = await clientServices.create(client);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})


export default router