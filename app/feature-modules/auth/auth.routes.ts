import { Router,Request,Response,NextFunction } from "express";
import authService from "./auth.service";
import { ResponseHandler } from "../../utilities/response-handler";
import { AUTH_VALIDATOR } from "./auth.validations";

const router = Router();


router.post("/login",AUTH_VALIDATOR ,async (req:Request,res: Response,next: NextFunction) => {
    try {
        const credentials = req.body;
        const result = await authService.login(credentials);
        res.send(new ResponseHandler(result))
    } catch (error) {
        next(error)
    }
})


export default router;