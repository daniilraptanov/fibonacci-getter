import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { apiSchemasBadRequest } from "../errors/http-errors";
import { indexSchema } from "../schemas/fibonacci-schemas";

export class FibonacciValidator {
    static async checkIndex(req: Request, res: Response, next: NextFunction) {
        try {
            const { index } = req.body;
            const { error } = indexSchema.validate({ index });
        
            if (!error) {
                return next();
            }
            
            return apiSchemasBadRequest(error, res);   
        } catch (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }
}