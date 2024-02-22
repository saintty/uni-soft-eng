import { nextPrime } from "./index";

test("test nextPrime: true", () => {
  expect(nextPrime(1)).toEqual(2);
  expect(nextPrime(3)).toEqual(5);
  expect(nextPrime(5)).toEqual(7);
  expect(nextPrime(10)).toEqual(11);
  expect(nextPrime(4)).toEqual(5);
});
