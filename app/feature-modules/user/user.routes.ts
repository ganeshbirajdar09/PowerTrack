import { NextFunction, Request, Response, Router } from "express";
import { IUser } from "./user.types";
import { permit } from "../../utilities/authorize";
import { ROLES } from "../../utilities/constants";
import userService from "./user.service";
import { ResponseHandler } from "../../utilities/response-handler";
import authService from "../auth/auth.service";
import { WORKER_REGISTER_VALIDATIONS } from "./user.validations";

const router = Router();


router.post("/create", WORKER_REGISTER_VALIDATIONS, permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const worker = req.body;
        const result = await authService.register(worker);
        res.send(new ResponseHandler(result))

    } catch (error) {
        next(error)
    }
})
router.get("/clients", permit([ROLES.WORKER]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = res.locals.user;
        const result = await userService.allClients(user);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.get("/workers", permit([ROLES.ADMIN]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.allWorkers();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})
router.post("/reason", permit([ROLES.WORKER]), async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.allWorkers();
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})

export default router;