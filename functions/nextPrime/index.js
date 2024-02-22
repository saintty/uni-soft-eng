import { isPrime } from "../isPrime/index";

export const nextPrime = (x) => {
    for (let i = x; i <= 2*x; i++) {
        if (isPrime(i + 1)) {
            return i + 1 
        }
    }
};