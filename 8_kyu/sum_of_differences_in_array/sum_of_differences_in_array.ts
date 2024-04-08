export const sumOfDifferences = (arr: number[]): number => {
  return [...arr]
    .sort((a, b) => b - a)
    .reduce(
      (sum, next, indx, array) => (!indx ? 0 : sum + (array[indx - 1] - next)),
      0,
    );
};
