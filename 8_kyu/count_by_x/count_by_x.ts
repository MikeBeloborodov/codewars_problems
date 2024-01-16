export const countBy = (x: number, n: number) => {
  return [...Array(n)].map((_, index) => x * (index + 1));
};
