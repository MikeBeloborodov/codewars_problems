export const largestPairSum = (numbers: number[]): number => {
  return [...numbers]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((sum, next) => sum + next);
};
