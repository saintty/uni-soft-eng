import { fib } from "../isPrime/index.js";

test("test isPrime: true", () => {
    expect(fib(2)).ToEqual();
    expect(fib(3)).toBeTruthy();
    expect(fib(3)).toBeTruthy();
    expect(fib(5)).toBeTruthy();
    expect(fib(6)).toBeTruthy();
    expect(fib(7)).toBeTruthy();
});