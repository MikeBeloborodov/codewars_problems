export const squares = (x: number, n: number): number[] => {
  if (n <= 0) return [];

  return Array(n)
    .fill(1)
    .map((_, index) => {
      if (index > 0) {
        x = Math.pow(x, 2);
      }
      return x;
    });
};
