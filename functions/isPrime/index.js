export const isPrime = (x) => {
  if (typeof x !== "number" || x <= 1) return false;

  const sqrt = Math.sqrt(x);

  for (let i = 2; i <= sqrt; i++) {
    if (x % i === 0) return false;
  }

  return true;
};
