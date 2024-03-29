export const sumOfMinimums = (arr: number[][]): number => {
  return arr.reduce((sum, next) => sum + [...next].sort((a, b) => a - b)[0], 0);
};
