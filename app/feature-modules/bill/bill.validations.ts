import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import {IncomingForm} from "formidable";
import { validate } from "../../utilities/validate";


export const parsedForm = () => (req: Request,res: Response,next:NextFunction) => {
    let form = new IncomingForm();

    form.parse(req, (err,fields, files) => {
        if(err) next(err)
        
    })
}

export const BILL_CREATION_VALIDATIONS = [
    body("clientId").withMessage("clientId is required"),
    body("units").isNumeric().withMessage("units is required"),
    validate
]
