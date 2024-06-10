export const differenceOfSquares = (n: number) => {
  const squareOfTheSum = Math.pow(
    Array(n)
      .fill(1)
      .map((_, index) => index + 1)
      .reduce((sum, next) => sum + next, 0),
    2,
  );

  const sumOfSquares = Array(n)
    .fill(1)
    .map((_, index) => Math.pow(index + 1, 2))
    .reduce((sum, next) => sum + next, 0);

  return squareOfTheSum - sumOfSquares;
};
