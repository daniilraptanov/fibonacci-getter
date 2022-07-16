import { IFibonacciService } from "../types/services/fibonacci-service";

export class FibonacciServiceImpl implements IFibonacciService {
    calculateFibonacci(index: number, memo: any={}): number {
        if (memo[index]) return memo[index];
        if (index === 0) return 0;
        if (index === 1 || index === 2) return 1;
        
        return memo[index] = this.calculateFibonacci(index - 1, memo) + this.calculateFibonacci(index - 2, memo);
    }
}