export const maxTriSum = (numbers: number[]): number => {
  return [...new Set(numbers)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);
};
