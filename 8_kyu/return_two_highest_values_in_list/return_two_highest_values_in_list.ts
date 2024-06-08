export const twoHighest = (arr: number[]): number[] => {
  const sortedArr = [...arr].sort((a, b) => b - a);

  if (!sortedArr.length) return [];

  const max1 = sortedArr[0];
  const max2 = sortedArr.find((v) => v !== max1);

  return max2 ? [max1, max2] : [max1];
};
