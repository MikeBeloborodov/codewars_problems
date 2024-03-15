export const factorial = (n: number): number => {
  if (n < 0 || n > 12) {
    throw new RangeError();
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};
