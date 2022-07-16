import { FibonacciServiceImpl } from "../../services/fibonacci-service";

// const fibonacciIndexes = require("../mock-resources/fibonacciIndexes.json");
const baseFibonacci = require("../mock-resources/base-fibonacci.json");
const fibonacciService = new FibonacciServiceImpl();


describe("FibonacciServiceImpl", () => {
    describe("calculateFibonacci", () => {
        let result = [];

        test("Should return array of 20 fibonacci numbers", () => {
            for (let index = 0; index < baseFibonacci.length; index++) {
                result.push(fibonacciService.calculateFibonacci(index));
            }

            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                expect(element).toEqual(baseFibonacci[index]);
            }
        })
    })
});