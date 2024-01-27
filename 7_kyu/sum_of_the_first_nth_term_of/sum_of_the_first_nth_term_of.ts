export const SeriesSum = (n: number): string =>
  !n
    ? "0.00"
    : [...Array(n)].reduce((s, _, i) => s + 1 / (1 + i * 3), 0).toFixed(2);
