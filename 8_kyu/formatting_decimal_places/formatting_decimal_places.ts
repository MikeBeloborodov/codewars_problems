export const twoDecimalPlaces = (n: number): number =>
  Math.round(n * 100) / 100;

// cleaner solution
// Number(n.toFixed(2))
