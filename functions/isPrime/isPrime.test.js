import { isPrime } from "./index";

test("test isPrime: true", () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(13)).toBeTruthy();
  expect(isPrime(11)).toBeTruthy();
  expect(isPrime(43)).toBeTruthy();
  expect(isPrime(1009)).toBeTruthy();
});

test("test isPrime: false", () => {
  expect(isPrime(0)).toBeFalsy();
  expect(isPrime(-19)).toBeFalsy();
  expect(isPrime(-1)).toBeFalsy();
  expect(isPrime(12)).toBeFalsy();
  expect(isPrime(102)).toBeFalsy();
  expect(isPrime(121)).toBeFalsy();
  expect(isPrime("asd")).toBeFalsy();
  expect(isPrime(null)).toBeFalsy();
  expect(isPrime("123123")).toBeFalsy();
});
