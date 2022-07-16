import { Request, Response } from "express";
const { v4: uuidv4 } = require('uuid')
import { StatusCodes } from "http-status-codes";
import { ClientCreator } from "../db/client";
import { FibonacciServiceImpl } from "../services/fibonacci-service";


export class FibonacciController {
    static async createTicket(req: Request, res: Response) {
        try {
            const fibonacciService = new FibonacciServiceImpl();
            const { index } = req.body;

            const existingTicketEntity = await ClientCreator.ticketRepository.search()
                .where("index").equals(index).return.first();

            const ticketEntity = await ClientCreator.ticketRepository.createAndSave({
                index: index,
                ticket: uuidv4(),
                fibonacci: existingTicketEntity?.fibonacci || fibonacciService.calculateFibonacci(index),
            });

            if (!ticketEntity) {
                res.status(500).send("Ticket does not created");
            }

            res.status(201).json({ ticket: ticketEntity.ticket });
        } catch (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }

    static async getFibonacci(req: Request, res: Response) {
        try {
            const { ticket } = req.params;

            const ticketEntity = await ClientCreator.ticketRepository.search()
                .where("ticket").equals(ticket).return.first();

            if (!ticketEntity) {
                res.status(400).send("Ticket does not created");
            }

            res.status(200).json({ fibonacci: ticketEntity.fibonacci });
        } catch (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
        }
    }
}