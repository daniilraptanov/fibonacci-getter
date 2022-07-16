// import BigInteger from "big-integer";
import { IFibonacciService } from "../types/services/fibonacci-service";

export class FibonacciServiceImpl implements IFibonacciService {
    calculateFibonacci(index: number, memo: any={}): number {
        if (memo[index]) return memo[index];
        if (index === 0) return 0;
        if (index === 1 || index === 2) return 1;
        
        return memo[index] = this.calculateFibonacci(index - 1, memo) + this.calculateFibonacci(index - 2, memo);
    }

    // private phi() {
    //     return (1 + Math.sqrt(5)) / 2;
    // }

    // calculateFibonacci(index) {
    //     index = BigInteger(index);
    //     const x = index.multiply(Math.sqrt(5)).add((1/2));

    //     return Math.round(x.log() / Math.log(this.phi()));
    // }
}