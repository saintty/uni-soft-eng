import { fib } from "./index";

test("test Fib: answer correct", () => {
    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(2)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);
    expect(fib(6)).toEqual(8);
    expect(fib(-1)).toBeFalsy();
    expect(fib("12")).toBeFalsy();
});