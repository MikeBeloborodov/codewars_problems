export const minSum = (arr: number[]): number => {
  return [...arr]
    .sort((a, b) => a - b)
    .reduce((r, n, i, a) => {
      return i < a.length / 2 ? r + a[i] * a[a.length - 1 - i] : r;
    }, 0);
};
