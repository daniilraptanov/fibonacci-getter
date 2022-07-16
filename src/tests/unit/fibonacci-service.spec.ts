import { FibonacciServiceImpl } from "../../services/fibonacci-service";

const fibonacciIndexes = require("../mock-resources/fibonacci-indexes.json");
const baseFibonacci = require("../mock-resources/base-fibonacci.json");
const fibonacciService = new FibonacciServiceImpl();


describe("FibonacciServiceImpl", () => {
    describe("calculateFibonacci", () => {
        let result = [];

        test("Should return array of baseFibonacci fibonacci numbers", () => {
            for (let index = 0; index < baseFibonacci.length; index++) {
                result.push(fibonacciService.calculateFibonacci(index));
            }

            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                expect(element).toEqual(baseFibonacci[index]);
            }
        });

        test("Should return array of fibonacci numbers", () => {
            const result = fibonacciService.calculateFibonacci(fibonacciIndexes[2]);           
            expect(result).not.toBeNull();

            console.log(`RESULT by index ${fibonacciIndexes[2]} => `, result);
        });
    })
});