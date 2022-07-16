import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";


export class FibonacciController {
    static async createTicket(req: Request, res: Response) {
        try {
            const { index } = req.body;
        } catch (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }

    static async getFibonacci(req: Request, res: Response) {
        try {

        } catch (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }
}