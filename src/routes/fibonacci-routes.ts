import { FibonacciController } from "../controllers/fibonacci-controller";
import { FibonacciValidator } from "../middleware/fibonacci-validator";

const { Router } = require("express");

const router = Router();

router.post(
    "/input",
    FibonacciValidator.checkIndex,
    FibonacciController.createTicket
);

router.get(
    "/output/:ticket",
    FibonacciController.getFibonacci
);

module.exports = router;
