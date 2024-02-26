export const fib = (n) => {
  if (typeof n !== "number" || n < 0) return false;

  let prev = 0,
    next = 1;
  for (let i = 0; i < n; i++) {
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
};
