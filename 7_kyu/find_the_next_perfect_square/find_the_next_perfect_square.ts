export const findNextSquare = (n: number) => {
  if (!Number.isInteger(Math.sqrt(n))) return -1;

  n = n + 1;
  while (!Number.isInteger(Math.sqrt(n))) {
    n = n + 1;
  }

  return n;
};
